CREATE DATABASE Jobs

USE Jobs

CREATE TYPE CodeType FROM varchar (50) NOT NULL
CREATE TYPE UserNameType FROM varchar (50) NOT NULL

CREATE TABLE TableMetadata (
    SchemaName varchar (128) NOT NULL,
    TableName varchar (128) NOT NULL,
    DisplayName varchar (256) NOT NULL,
    DisplayNamePlural varchar (256) NOT NULL,
    Description varchar (max) NOT NULL,
    LastUpdateTimestamp datetime2 NOT NULL,
    LastUpdateUserName UserNameType NOT NULL,
    CONSTRAINT PK_DataDictionaryTable PRIMARY KEY (SchemaName, TableName)
)

CREATE TABLE ColumnMetadata (
    SchemaName varchar (128) NOT NULL,
    TableName varchar (128) NOT NULL,
    ColumnName varchar (128) NOT NULL,
    DisplayName varchar (256) NOT NULL,
    Description varchar (max) NOT NULL,
    TypeCode CodeType NOT NULL,
    LastUpdateTimestamp datetime2 NOT NULL,
    LastUpdateUserName UserNameType NOT NULL,
    CONSTRAINT PK_DataDictionaryColumn PRIMARY KEY (SchemaName, TableName, ColumnName)
)

CREATE VIEW DataDictionary
AS
SELECT
    *
FROM INFORMATION_SCHEMA.TABLES t
LEFT JOIN TableMetadata tm ON tm.SchemaName = t.TABLE_SCHEMA AND tm.TableName = t.TABLE_NAME
INNER JOIN INFORMATION_SCHEMA.COLUMNS c ON t.TABLE_SCHEMA = c.TABLE_SCHEMA AND t.TABLE_NAME = c.TABLE_NAME 
LEFT JOIN ColumnMetadata cm ON cm.SchemaName = c.TABLE_SCHEMA AND cm.TableName = c.TABLE_NAME AND cm.ColumnName = c.COLUMN_NAME


CREATE TABLE JobDefinition (
    JobDefinitionId int IDENTITY (1, 1) NOT NULL,
    DisplayName varchar (50) NOT NULL,
    Description varchar (max) NOT NULL,
    CONSTRAINT PK_JobDefinition PRIMARY KEY (JobDefinitionId)
)

CREATE TABLE JobDefinitionDependency (
    JobDefinitionId int NOT NULL,
    DependentJobDefinitionId int NOT NULL,
    CONSTRAINT
)

CREATE TABLE JobRun (
    JobRunId int IDENTITY (1, 1) NOT NULL,
    JobDefinitionId int NOT NULL,
    JobStatusKey CodeType NOT NULL,
    ScheduledStartTime datetime2 NULL,
    StartTime datetime2 NOT NULL,
    EndTime datetime2 NULL,
    CONSTRAINT PK_JobRun PRIMARY KEY (JobRunId)
)
