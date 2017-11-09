CREATE DATABASE Security

USE Security

CREATE TYPE UserNameType FROM varchar (50) NOT NULL
CREATE TYPE FriendlyKeyType FROM varchar (50) NOT NULL

CREATE TABLE UserStatus (
	UserStatusKey FriendlyKeyType NOT NULL,
	DisplayName varchar (50) NOT NULL,
	Description varchar (max) NOT NULL,
	CONSTRAINT PK_UserStatus PRIMARY KEY (UserStatusKey)
)

CREATE TABLE [User] (
	UserId int IDENTITY (1, 1) NOT NULL,
	UserStatusKey FriendlyKeyType NOT NULL,
	IsSystemUser bit NOT NULL,
	LastUpdateTimestamp datetime2 NOT NULL,
	LastUpdateUserName UserNameType NOT NULL,
	CONSTRAINT PK_User PRIMARY KEY (UserId)
)

CREATE TABLE UserUdf (
	UserId int NOT NULL,
	CONSTRAINT PK_UserUdf PRIMARY KEY (UserUdf),
	CONSTRAINT FK_UserUdf_User FOREIGN KEY (UserId) REFERENCES [User] (UserId)
)

CREATE TABLE UserLogin (
	UserLoginId int IDENTITY (1, 1) NOT NULL,
	UserName varchar (50) NOT NULL,
	LastLoginDateTime datetime2 NULL,
	LastUpdateTimestamp datetime2 NOT NULL,
	LastUpdateUserName UserNameType NOT NULL,
	CONSTRAINT PK_UserLogin PRIMARY KEY (UserLoginId)
)

CREATE TABLE PermissionScope (
	PermissionScopeKey FriendlyKeyType NOT NULL,
	DisplayName varchar (100) NOT NULL,
	LastUpdateTimestamp datetime2 NOT NULL,
	LastUpdateUserName UserNameType NOT NULL,
	CONSTRAINT PK_PermissionScope PRIMARY KEY (PermissionScopeKey)
)

CREATE TABLE [Role] (
	RoleId int IDENTITY (1, 1) NOT NULL,
	DisplayName varchar (100) NOT NULL,
	Description varchar (50) NOT NULL,
	PermissionScopeCode FriendlyKeyType NOT NULL,
	LastUpdateTimestamp datetime2 NOT NULL,
	LastUpdateUserName UserNameType NOT NULL,
	CONSTRAINT PK_Role PRIMARY KEY (RoleId)
)

CREATE TABLE UserRole (
	UserId int NOT NULL,
	RoleId int NOT NULL,
	PermissionScopeCode FriendlyKeyType NOT NULL,
	ScopeIdentifier varchar (256) NOT NULL,
	CONSTRAINT PK_UserRole PRIMARY KEY (UserId, RoleId)
)	

CREATE TABLE Permission (
	PermissionKey FriendlyKeyType NOT NULL,
	DisplayName varchar (100) NOT NULL,
	Description varchar (max) NOT NULL,
	LastUpdateTimestamp datetime2 NOT NULL,
	LastUpdateUserName UserNameType NOT NULL,
	CONSTRAINT PK_Permission PRIMARY KEY (PermissionKey)
)

CREATE TABLE RolePermission (
	RoleId int NOT NULL,
	PermissionKey FriendlyKeyType NOT NULL,
	CONSTRAINT PK_RolePermission PRIMARY KEY (RoleId, PermissionKey)
)

CREATE TABLE [Group] (
	GroupId int IDENTITY (1, 1) NOT NULL,
	DisplayName varchar (100) NOT NULL,
	Description varchar (max) NOT NULL,
	LastUpdateTimestamp datetime2 NOT NULL,
	LastUpdateUserName UserNameType NOT NULL,
	CONSTRAINT PK_Permission PRIMARY KEY (PermissionKey)
)

CREATE TABLE GroupPermission (
	GroupId int NOT NULL,
	PermissionKey FriendlyKeyType NOT NULL,
	PermissionScopeCode FriendlyKeyType NOT NULL,
	ScopeIdentifier varchar (256) NOT NULL,
	CONSTRAINT PK_GroupPermission PRIMARY KEY (GroupId, PermissionKey)
)

CREATE TABLE UserGroup (
	UserId int NOT NULL,
	GroupId int NOT NULL,
	CONSTRAINT PK_UserGroup PRIMARY KEY (UserId, GroupId)
)	

-- TODO: Limit Permission to a specific scope?
-- TODO: Limit Role to a specific scope?