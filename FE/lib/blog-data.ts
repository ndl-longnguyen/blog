export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  tags: string[]
  author: {
    name: string
    title: string
    avatar: string
  }
  content: {
    intro: string
    sections: {
      heading: string
      body: string
      codeSnippet?: {
        language: string
        code: string
      }
      keyTakeaways?: string[]
    }[]
    conclusion: string
  }
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "postgresql-query-optimization-redis-scaling",
    title: "Optimizing PostgreSQL Queries and Redis Caching for High-Throughput Systems (30,000+ Users)",
    excerpt: "A practical deep-dive into resolving N+1 query bottlenecks, compound B-tree indexing strategies, and implementing the Cache-Aside pattern with Redis to scale backend services under heavy load.",
    date: "August 28, 2026",
    readTime: "7 min read",
    category: "Database & Performance",
    tags: ["PostgreSQL", "Redis", "Backend", "Performance Tuning", "System Architecture"],
    author: {
      name: "Nguyen Dai Long",
      title: "Backend Lead & Software Engineer",
      avatar: "/android-chrome-192x192.png",
    },
    content: {
      intro: "When scaling production web services from a few hundred daily visitors to tens of thousands of concurrent active users, the relational database is almost universally the first component to buckle under pressure. In this article, I share battle-tested optimization techniques and caching strategies implemented while scaling enterprise backend systems to over 30,000 active users, reducing p95 latency from 450ms down to 42ms.",
      sections: [
        {
          heading: "1. Identifying Slow Queries with EXPLAIN ANALYZE and pg_stat_statements",
          body: "Before applying any optimizations, you must measure with precision. Relying on intuition when tuning database queries is a recipe for wasted engineering hours. We enabled pg_stat_statements in PostgreSQL to track total execution time, call counts, and mean query duration. Using EXPLAIN (ANALYZE, BUFFERS), we uncovered excessive sequential table scans across tables exceeding 2 million rows where appropriate indexes were missing.",
          codeSnippet: {
            language: "sql",
            code: `-- Identifying top slow queries sorted by total time
SELECT 
    round(total_exec_time::numeric, 2) AS total_time_ms,
    calls,
    round(mean_exec_time::numeric, 2) AS mean_time_ms,
    query
FROM pg_stat_statements
ORDER BY total_exec_time DESC
LIMIT 5;`,
          },
          keyTakeaways: [
            "Enable pg_stat_statements in postgresql.conf for real-time query observability.",
            "Look for 'Seq Scan' on large tables in query execution plans.",
            "Pay close attention to Shared Hit Blocks vs. Read Blocks to assess cache efficiency.",
          ],
        },
        {
          heading: "2. Strategic Indexing: Beyond Basic Single-Column B-Trees",
          body: "A common beginner pitfall is blindly indexing every foreign key column. Each index carries write amplification overhead on INSERT, UPDATE, and DELETE. We replaced redundant single-column indexes with composite (compound) B-tree indexes designed specifically around our query filter orders (Equality columns first, Range/Inequality columns second). Furthermore, partial indexes were introduced for queries targeting active user records (e.g., status = 'active'), cutting index disk storage by 70%.",
          codeSnippet: {
            language: "sql",
            code: `-- Composite index for filtering by team_id and created_at range
CREATE INDEX idx_orders_team_created ON orders (team_id, created_at DESC);

-- Partial index for active subscribers only
CREATE INDEX idx_active_users_email ON users (email) 
WHERE is_active = true AND deleted_at IS NULL;`,
          },
          keyTakeaways: [
            "Follow the ESR rule (Equality, Sort, Range) when structuring composite indexes.",
            "Utilize partial indexes to keep indexes lightweight and cache-friendly.",
            "Regularly audit unused indexes using pg_stat_user_indexes to reclaim write throughput.",
          ],
        },
        {
          heading: "3. Multi-Tiered Caching: Cache-Aside with Redis and TTL Jitter",
          body: "Even with sub-millisecond query execution, hitting PostgreSQL for repetitive read-heavy requests wastes valuable connection pool slots. We deployed Redis in a Cache-Aside (Lazy Loading) architecture. To eliminate the dangerous 'Cache Stampede' problem where hundreds of threads simultaneously query the database when a popular key expires, we implemented randomized TTL jitter and distributed locks via Redlock.",
          codeSnippet: {
            language: "python",
            code: `import json
import random
from django.core.cache import cache

def get_user_dashboard(user_id: int):
    cache_key = f"user_dash:{user_id}"
    data = cache.get(cache_key)
    
    if data is not None:
        return json.loads(data)
        
    # Cache miss: fetch from PostgreSQL
    data = fetch_dashboard_from_db(user_id)
    
    # Add random jitter between 300 and 360 seconds to prevent stampedes
    ttl = 300 + random.randint(0, 60)
    cache.set(cache_key, json.dumps(data), timeout=ttl)
    return data`,
          },
          keyTakeaways: [
            "Always serialize cached payloads with efficient formats (e.g., JSON or MessagePack).",
            "Introduce random TTL jitter (+-10%) to prevent simultaneous mass key expirations.",
            "Invalidate caches explicitly on data mutations (write-through or event-based invalidation).",
          ],
        },
      ],
      conclusion: "Performance optimization is an iterative process. By systematically analyzing slow queries with EXPLAIN ANALYZE, applying targeted composite and partial indexes, and shielding PostgreSQL behind a resilient Redis caching layer, our infrastructure seamlessly absorbed traffic spikes without requiring expensive database hardware upgrades.",
    },
  },
  {
    slug: "chunked-file-upload-5gb-django-pdf-pipeline",
    title: "Building a Resilient 5GB Chunked File Upload and Memory-Optimized PDF Pipeline in Django",
    excerpt: "How we engineered a chunked multipart file upload architecture supporting 5GB+ payloads and built a streaming PDF generation pipeline that never exceeds 256MB container memory limits.",
    date: "August 20, 2026",
    readTime: "8 min read",
    category: "Backend Architecture",
    tags: ["Python", "Django", "File Upload", "Memory Optimization", "Docker"],
    author: {
      name: "Nguyen Dai Long",
      title: "Backend Lead & Software Engineer",
      avatar: "/android-chrome-192x192.png",
    },
    content: {
      intro: "Allowing users to upload large files—such as high-resolution training videos or multi-gigabyte document archives—poses severe operational risks for cloud containers. Traditional monolithic HTTP uploads fail frequently due to transient network drops, exhaust web worker concurrency, and trigger Out-Of-Memory (OOM) kills. Here is how we designed a robust chunked upload mechanism and memory-safe PDF processing pipeline.",
      sections: [
        {
          heading: "1. The Anatomy of Chunked File Uploads",
          body: "Instead of streaming a 5GB file in a single HTTP request, the client splits the file into uniform 5MB binary chunks using the browser's File.slice() API. Each chunk is dispatched independently with metadata including chunk index, total chunks, and a unique upload session identifier. Failed chunks are automatically retried up to three times with exponential backoff without having to restart the entire upload.",
          codeSnippet: {
            language: "python",
            code: `# Django view handling atomic chunk ingestion
class ChunkedUploadView(APIView):
    def post(self, request):
        upload_id = request.data.get('upload_id')
        chunk_index = int(request.data.get('chunk_index'))
        total_chunks = int(request.data.get('total_chunks'))
        file_obj = request.FILES.get('file')

        temp_dir = os.path.join(settings.TEMP_UPLOAD_DIR, upload_id)
        os.makedirs(temp_dir, exist_ok=True)
        chunk_path = os.path.join(temp_dir, f"chunk_{chunk_index:04d}")

        with open(chunk_path, 'wb+') as destination:
            for chunk in file_obj.chunks():
                destination.write(chunk)

        if len(os.listdir(temp_dir)) == total_chunks:
            # Trigger asynchronous background assembly task
            assemble_chunks_task.delay(upload_id, total_chunks)
            return Response({'status': 'assembling'})

        return Response({'status': 'chunk_received', 'index': chunk_index})`,
          },
          keyTakeaways: [
            "Chunk size of 5MB-10MB offers optimal balance between network overhead and retry efficiency.",
            "Use temporary local scratch directories with deterministic zero-padded filenames.",
            "Delegate final file assembly to Celery/background workers to keep HTTP responses instantaneous.",
          ],
        },
        {
          heading: "2. Streaming Assembly and Checksum Verification",
          body: "When all chunks arrive, assembling them must not load the entire multi-gigabyte file into memory. We stream chunks sequentially into the final destination file in 64KB buffers while computing a running SHA-256 checksum. If the assembled checksum matches the client-provided checksum, the file is uploaded directly to cloud object storage (AWS S3 or GCP Cloud Storage) and local temporary artifacts are purged.",
          codeSnippet: {
            language: "python",
            code: `import hashlib

def assemble_file(upload_id: str, total_chunks: int, output_path: str):
    hasher = hashlib.sha256()
    with open(output_path, 'wb') as outfile:
        for idx in range(total_chunks):
            chunk_file = os.path.join(settings.TEMP_UPLOAD_DIR, upload_id, f"chunk_{idx:04d}")
            with open(chunk_file, 'rb') as infile:
                while chunk := infile.read(65536):
                    outfile.write(chunk)
                    hasher.update(chunk)
            os.remove(chunk_file) # Clean up eagerly
    return hasher.hexdigest()`,
          },
          keyTakeaways: [
            "Read and write in fixed 64KB buffers to keep process RAM usage under 30MB regardless of file size.",
            "Clean up chunk files eagerly during assembly to prevent disk space exhaustion.",
            "Verify cryptographic checksums before promoting files to permanent cloud storage.",
          ],
        },
        {
          heading: "3. Memory-Safe PDF Generation in Constrained Docker Containers",
          body: "Generating comprehensive certification and reporting PDFs with hundreds of pages can quickly exceed the 512MB RAM ceiling of cloud container instances. By utilizing Python generators and streaming HTTP responses rather than accumulating huge strings in memory, we maintained container memory usage below 180MB at all times.",
          keyTakeaways: [
            "Avoid loading entire document trees into memory when rendering large PDFs.",
            "Use temporary disk-backed spooling for image-heavy document rendering.",
            "Set strict memory limits in Docker compose and monitor with Prometheus.",
          ],
        },
      ],
      conclusion: "Resilient systems anticipate network volatility. Implementing chunked uploads and buffer-based streaming pipelines completely eliminated file upload timeouts, reduced server memory footprints, and created an uninterrupted user experience even on unstable mobile connections.",
    },
  },
  {
    slug: "gcp-cloud-run-docker-cost-optimization",
    title: "Reducing Cloud Infrastructure Costs by 50% on Google Cloud Platform and Docker",
    excerpt: "A practical guide to auditing cloud resources, optimizing multi-stage Docker builds, and migrating backend services to Google Cloud Run with fine-tuned concurrency to slash monthly server bills.",
    date: "August 12, 2026",
    readTime: "6 min read",
    category: "Cloud & DevOps",
    tags: ["GCP", "Cloud Run", "Docker", "DevOps", "Cost Optimization"],
    author: {
      name: "Nguyen Dai Long",
      title: "Backend Lead & Software Engineer",
      avatar: "/android-chrome-192x192.png",
    },
    content: {
      intro: "As applications grow, cloud infrastructure bills can spiral out of control if left unmonitored. By auditing idle resources, migrating from over-provisioned virtual machines to serverless container execution on Google Cloud Run, and aggressively optimizing Docker image sizes, our team successfully halved our monthly cloud expenditure from $1,000 to $500 while improving overall uptime and deployment velocity.",
      sections: [
        {
          heading: "1. The Initial Cost Audit: Uncovering the Hidden Spenders",
          body: "A deep dive into GCP Cost Management revealed three major cost drivers: continuously running Compute Engine instances with less than 15% average CPU utilization, oversized Cloud SQL database tiers, and massive Docker images causing exorbitant Cloud Storage and egress charges during CI/CD builds.",
          keyTakeaways: [
            "Compute instances running 24/7 at low utilization represent pure financial waste.",
            "Review storage class lifecycles: move old build artifacts to Coldline/Archive storage.",
            "Set up automated GCP budget alerts with webhooks to Slack to prevent billing surprises.",
          ],
        },
        {
          heading: "2. Multi-Stage Docker Builds: Shrinking Images from 1.2GB to 140MB",
          body: "Our initial Dockerfile bundled full Python build toolchains, GCC compiler packages, and unnecessary development dependencies. By implementing multi-stage builds and switching to python:3.11-slim as our base runtime image, we shrank our container image size by nearly 90%. This reduced container cold start times on Cloud Run from 8.5 seconds down to under 1.4 seconds.",
          codeSnippet: {
            language: "dockerfile",
            code: `# Build stage
FROM python:3.11-slim AS builder
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends gcc libpq-dev && rm -rf /var/lib/apt/lists/*
COPY requirements.txt .
RUN pip install --no-cache-dir --user -r requirements.txt

# Final minimal runtime stage
FROM python:3.11-slim
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends libpq5 && rm -rf /var/lib/apt/lists/*
COPY --from=builder /root/.local /root/.local
COPY . .
ENV PATH=/root/.local/bin:$PATH
EXPOSE 8080
CMD ["gunicorn", "--bind", ":8080", "--workers", "2", "--threads", "8", "config.wsgi:application"]`,
          },
          keyTakeaways: [
            "Always use multi-stage builds to separate compilation tools from production runtimes.",
            "Leverage .dockerignore to exclude local virtual environments and git history.",
            "Tune gunicorn workers and threads to match the concurrency settings of Cloud Run.",
          ],
        },
        {
          heading: "3. Leveraging Cloud Run Concurrency and Auto-Scaling",
          body: "Unlike traditional Functions-as-a-Service (FaaS) that spin up one container instance per request, Google Cloud Run supports concurrency (up to 250 concurrent requests per container). We tuned our container concurrency to 80 requests per instance, allowing a single 1-vCPU / 512MB RAM container to handle substantial traffic without scaling up prematurely.",
          keyTakeaways: [
            "Adjust container concurrency based on I/O vs CPU workload characteristics.",
            "Set minimum instances to 0 during non-business hours for dev/staging environments.",
            "Use Cloud Run request timeouts to automatically terminate hung processes.",
          ],
        },
      ],
      conclusion: "Cloud cost optimization is not about sacrificing performance; it is about eliminating waste. By pairing multi-stage Docker builds with Cloud Run's granular per-second billing model, we achieved superior reliability, zero-maintenance scaling, and an immediate 50% cost reduction.",
    },
  },
  {
    slug: "websocket-realtime-notifications-redis",
    title: "Real-Time Notifications and Event Streaming with WebSockets and Redis Pub/Sub",
    excerpt: "Architecting a decoupled, scalable real-time notification engine using WebSockets, Redis Pub/Sub message brokers, and automatic reconnection handlers for enterprise web clients.",
    date: "August 04, 2026",
    readTime: "7 min read",
    category: "Real-Time Systems",
    tags: ["WebSocket", "Redis", "Pub/Sub", "Real-Time", "Event-Driven"],
    author: {
      name: "Nguyen Dai Long",
      title: "Backend Lead & Software Engineer",
      avatar: "/android-chrome-192x192.png",
    },
    content: {
      intro: "Users expect immediate feedback: whether it is team chat messages, workflow status updates, or system alerts, waiting for a manual page refresh or periodic polling is no longer acceptable. In this guide, I break down our architecture for delivering real-time notifications across thousands of concurrent clients using WebSockets and Redis Pub/Sub.",
      sections: [
        {
          heading: "1. Polling vs. Long-Polling vs. WebSockets",
          body: "HTTP polling inundates servers with empty requests (often 95%+ returning no new data), wasting bandwidth and exhausting database connections. Long-polling improves on this but still incurs repeated TCP/TLS handshake overhead. WebSockets provide a persistent, full-duplex TCP connection established once via an HTTP 101 Switching Protocols handshake, allowing instantaneous sub-10ms event delivery.",
          keyTakeaways: [
            "WebSockets dramatically reduce network header overhead compared to repetitive polling.",
            "Maintain bi-directional heartbeat (ping/pong) frames to detect dead connections promptly.",
            "Authenticate the initial upgrade request securely using short-lived JWTs.",
          ],
        },
        {
          heading: "2. Scaling Across Container Nodes with Redis Pub/Sub",
          body: "In a clustered production environment with multiple backend containers behind a load balancer, client A may be connected to Node 1, while the database event triggering a notification occurs on Node 2. To decouple our nodes, we utilized Redis Pub/Sub as a distributed message bus. When any service triggers an event, it publishes the payload to a designated Redis channel, and all listening nodes broadcast it to their local connected WebSocket subscribers.",
          codeSnippet: {
            language: "python",
            code: `# Publishing an event to user channel
import json
import redis

r = redis.Redis(host='redis-cluster', port=6379, db=0)

def emit_user_notification(user_id: str, notification_type: str, message: str):
    channel = f"channel:user:{user_id}"
    payload = {
        "type": notification_type,
        "message": message,
        "timestamp": time.time()
    }
    r.publish(channel, json.dumps(payload))`,
          },
          keyTakeaways: [
            "Redis Pub/Sub enables seamless horizontal scaling across stateless backend nodes.",
            "Structure channels systematically (e.g., 'channel:user:{id}' or 'channel:team:{id}').",
            "Keep published message payloads compact to minimize in-memory message broker overhead.",
          ],
        },
        {
          heading: "3. Client-Side Reliability: Heartbeats and Exponential Backoff",
          body: "Network connections on mobile and laptop devices drop constantly when users switch Wi-Fi networks or sleep their devices. Our client-side WebSocket client implements automated exponential backoff with random jitter for reconnect attempts, alongside a missed-event sequence replay check upon reconnection.",
          keyTakeaways: [
            "Never reconnect instantly in a loop—always use exponential backoff with jitter.",
            "Track last-received message IDs to request missed updates during brief disconnects.",
            "Provide clear UI connection status indicators to keep users informed.",
          ],
        },
      ],
      conclusion: "WebSockets coupled with Redis Pub/Sub provide an elegant, scalable solution for interactive modern applications. With minimal operational complexity, you can deliver sub-second event streaming to thousands of active users reliably.",
    },
  },
  {
    slug: "client-side-image-compression-canvas-web-worker",
    title: "High-Performance Client-Side Image Compression Using Web Workers and Canvas API",
    excerpt: "How we built a 100% private, browser-based image compression engine supporting JPEG, PNG, and WebP using offscreen Canvas and Web Workers without relying on external servers.",
    date: "July 26, 2026",
    readTime: "6 min read",
    category: "Frontend & Performance",
    tags: ["JavaScript", "Canvas API", "Web Workers", "Image Compression", "Privacy"],
    author: {
      name: "Nguyen Dai Long",
      title: "Backend Lead & Software Engineer",
      avatar: "/android-chrome-192x192.png",
    },
    content: {
      intro: "Transferring high-resolution multi-megabyte photos to a server solely for resizing and compression consumes unnecessary server CPU, increases cloud storage costs, and exposes user images to external servers. By leveraging modern browser APIs—specifically OffscreenCanvas and Web Workers—we built a high-performance image compression tool (image.ndlong.site) that runs entirely inside the user's browser.",
      sections: [
        {
          heading: "1. The Power of In-Browser Image Processing",
          body: "Modern browsers are extraordinarily capable runtime environments. By reading local files into memory as Blobs and drawing them onto an HTML5 Canvas, we can perform bicubic interpolation resizing and re-encode to modern formats like WebP and JPEG at custom quality levels (0.1 to 1.0) with zero network roundtrips.",
          keyTakeaways: [
            "Zero server bandwidth or computing cost: user devices execute all computations.",
            "100% privacy: sensitive user documents never leave the local browser sandbox.",
            "Instant results without upload or download wait times.",
          ],
        },
        {
          heading: "2. Preventing UI Freezes with Web Workers",
          body: "Compressing a 24-megapixel camera raw JPEG can consume hundreds of milliseconds of intense CPU time. If executed on the browser's main thread, the interface freezes, dropping animations and frustrating users. By offloading the binary compression algorithms to dedicated Web Workers, the user interface maintains a silky smooth 60 FPS.",
          codeSnippet: {
            language: "javascript",
            code: `// Offscreen canvas compression logic inside Web Worker
self.onmessage = async (e) => {
  const { imageBitmap, maxWidth, maxHeight, quality, mimeType } = e.data;
  
  let { width, height } = imageBitmap;
  if (width > maxWidth || height > maxHeight) {
    const ratio = Math.min(maxWidth / width, maxHeight / height);
    width = Math.round(width * ratio);
    height = Math.round(height * ratio);
  }

  const offscreen = new OffscreenCanvas(width, height);
  const ctx = offscreen.getContext('2d');
  ctx.drawImage(imageBitmap, 0, 0, width, height);

  const blob = await offscreen.convertToBlob({
    type: mimeType || 'image/webp',
    quality: quality || 0.85
  });

  self.postMessage({ compressedBlob: blob, width, height });
};`,
          },
          keyTakeaways: [
            "Use OffscreenCanvas inside Web Workers to completely decouple image manipulation from the main UI thread.",
            "Pass ImageBitmap objects between threads via transferable objects to avoid memory copies.",
            "Convert to WebP format by default for superior compression efficiency over legacy PNG/JPEG.",
          ],
        },
        {
          heading: "3. Handling EXIF Orientation and Color Profiles",
          body: "Mobile cameras often store photos rotated with an embedded EXIF orientation tag. Modern browsers automatically respect EXIF orientation when using createImageBitmap(file), preventing embarrassing upside-down or sideways compressed output.",
          keyTakeaways: [
            "createImageBitmap automatically honors EXIF orientation in modern browsers.",
            "Calculate compression ratios dynamically and display before/after previews.",
            "Provide one-click batch ZIP downloading for bulk user workflows.",
          ],
        },
      ],
      conclusion: "Client-side computing offers immense potential for modern web tools. By utilizing Web Workers and modern Canvas APIs, developers can deliver lightning-fast, privacy-respecting utilities that operate seamlessly while incurring zero server operating expenses.",
    },
  },
]
