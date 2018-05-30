CREATE DATABASE `matcha`;
USE `matcha`;

CREATE TABLE IF NOT EXISTS `task` (
	`Id` varchar(50) NOT NULL,
	`Title` varchar(500) DEFAULT NULL,
	`Status` varchar(100) DEFAULT NULL,
	PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `task` (`Id`, `Title`, `Status`) VALUES
	('1', 'Go to Market tomorrow', 'done'),
	('2', 'Email to manager', 'pending'),
	('3', 'Push code to GitHub', 'done'),
	('4', 'Go For Running', 'done'),
	('5', 'Go to Movie', 'pending');
