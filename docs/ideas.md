APIs
    Authentication
    Authorization
    SecurityManagement
        Manage users, roles, permissions, etc
    Ping
        Most basic demo of an API module
    System
        HealthCheck
        Dependencies
        Status
        Environment (OS etc)
        Version
    Notifications
    My
        Settings
        Account
        Profile
    Reports
    Messages
    JobManagement
    LogViewer
    Documents
        Management
            Provides a way to store, index, search, and associate meta-data with a document file (a file that contains parsable, indexable text information)
        Utility
            Provides document related utilities (e.g. conversion, parsing, etc) as a microservice
            Conversion
    Images? (temp upload, resizing, etc)

Frameworks
    Syncrhonous REST APIs
    ASynchronous message handlers
        Commands and events
        Different architectures for event streams?
    Sagas
    Dynamic entities
        Synchronous workflows kicked off on entity action (save, delete)
        ASyncrhonous workflows kicked off on entity action
            Should support user actions (e.g. approvals)
    Dynamic forms

Jobs
    Notifications
    ScheduledReports

DB
    Tasks
        Start container
        Stop container
        Delete container
        Back up
        Restore backup
        Cleanse database
        Database up (given database and folder)
            Create version table if needed
            Record version before run
        Database down
        Create new empty database
            Overwrite
            Create if not exists
        Populate database with data from external source

Security
    API
        @Authorize(Permissions.ListUsers, PermissionScope.Tenant, (req) => req.TenantId)
        getUsers(req: IGetUserRequest) {
            // ...
        }

        async getUsers() {
            let users = await this.userRepository.find();
            users = await this.permissionFilter.filter(users, Permissions.ViewUser, (user) => user.UserId);
            // or
            let users = await this.userRepository.find(this.permissionFilter.asQueryFilter());
            return users;
        }

Libraries Needed

    IOC
        Core
            xFactory
                Named
            Lifetime
                Tests
        Inversify
    Configuration
        Core
            JSON File
            Environment Variables
            Cascading/Multiple
    Cryptography
    Logging
        Core
            Console
            Memory
            Null
            Multiple
        Winston
    IO
        Core
            File System
        AWS S3
        Azure Blob Storage
    Credentials (or "keys"?)
        Azure Key Vault
    Email (sending and receiving?)
    Data
        Core
    Validation
    Authentication
    Queues/Messaging
        AWS SQS
        Azure Storage Queues
        RabbitMQ
    Service Bus
        AWS SNS
        Azure Service Bus
    Key Storage
        Azure Key Vault
        AWS KMS
    Credential Storage?
    Test
        test-<whatever data framework>
            Function to integration test mappings