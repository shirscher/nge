CREATE TABLE [Session] (
    SessionId uniqueidentifier NOT NULL,
    StartTime datetime2 NOT NULL,
    ExpirationTime datetime2 NOT NULL,
    CONSTRAINT PK_Session PRIMARY KEY (SessionId)
)

CREATE TABLE SessionVariable (
    SessionId uniqueidentifier NOT NULL,
    [Key] varchar (50) NOT NULL,
    [Value] varchar (max) NOT NULL,
    CONSTRAINT PK_SessionVariable PRIMARY KEY (SessionId, [Key])
)
