Types of workers:

1) Scheduled jobs
2) Continuously running workers
3) Queue/Service bus APIs

1 is just a 3 that is kicked off by a queue message
2 is what 3 really is - a continuously running service that is listening for messages on a queue
1 is just like the rest apis, just a different protocol

So what we need:
- Continuously running services
- A scheduler that kicks off service bus/queue messages
    ^ This MAY be a continuously running service, or we may use something else (cron, cloud service, enterprise scheduler), it just needs to be able to enqueue messages (although it could also just call a REST API whose job it is to enqueue the message).
- APIs, both REST and service bus/queue based

So, in conclusion:
- We needs APIs
    - These APIs should be generic with regard to protocol
        - HTTP requests (REST APIs based on HAPI/Express/Koa/etc)
        - or service bus/message queue
- And we need continuously running services
    - Will probably be very rare, unlikely necessary in a cloud environment or mature enterprise
        - So, let's just not use those
            - In other words, jsut delete this folder, we only have APIs, period.