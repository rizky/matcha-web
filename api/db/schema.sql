/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MySQL
 Source Server Version : 50559
 Source Host           : localhost:3306
 Source Schema         : camagru

 Target Server Type    : MySQL
 Target Server Version : 50559
 File Encoding         : 65001

 Date: 30/05/2018 18:40:19
*/

DROP SCHEMA IF EXISTS `matcha` ;

-- -----------------------------------------------------
-- Schema matcha
-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS `matcha` DEFAULT CHARACTER SET utf8 ;
USE `matcha` ;

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `user` int(10) unsigned zerofill NOT NULL,
  `photo` int(10) unsigned zerofill NOT NULL,
  `message` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deleted` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment
-- ----------------------------
BEGIN;
INSERT INTO `comment` VALUES (0000000001, 0000000001, 0000000001, 'cosmos cubic wall', '2018-05-30 16:39:15', NULL, b'0');
INSERT INTO `comment` VALUES (0000000002, 0000000003, 0000000003, 'pinky think thank toe', '2018-05-30 16:39:15', NULL, b'0');
INSERT INTO `comment` VALUES (0000000003, 0000000003, 0000000004, 'raining color', '2018-05-30 16:39:15', NULL, b'0');
INSERT INTO `comment` VALUES (0000000004, 0000000003, 0000000005, 'summer is malibu', '2018-05-30 16:39:15', NULL, b'0');
INSERT INTO `comment` VALUES (0000000005, 0000000001, 0000000005, 'nice pic!', '2018-05-30 16:39:15', NULL, b'0');
INSERT INTO `comment` VALUES (0000000006, 0000000003, 0000000005, 'thanks!!', '2018-05-30 16:39:15', NULL, b'0');
INSERT INTO `comment` VALUES (0000000007, 0000000003, 0000000006, 'stairway to the rainbow', '2018-05-30 16:39:15', NULL, b'0');
INSERT INTO `comment` VALUES (0000000008, 0000000001, 0000000006, 'nice pic!', '2018-05-30 16:39:15', NULL, b'0');
COMMIT;

-- ----------------------------
-- Table structure for like
-- ----------------------------
DROP TABLE IF EXISTS `like`;
CREATE TABLE `like` (
  `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `user` int(10) unsigned zerofill NOT NULL,
  `photo` int(10) unsigned zerofill NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deleted` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of like
-- ----------------------------
BEGIN;
INSERT INTO `like` VALUES (0000000001, 0000000003, 0000000005, '2018-05-30 16:39:15', NULL, b'0');
INSERT INTO `like` VALUES (0000000002, 0000000001, 0000000006, '2018-05-30 16:39:15', NULL, b'0');
INSERT INTO `like` VALUES (0000000003, 0000000003, 0000000006, '2018-05-30 16:39:15', NULL, b'0');
COMMIT;

-- ----------------------------
-- Table structure for photo
-- ----------------------------
DROP TABLE IF EXISTS `photo`;
CREATE TABLE `photo` (
  `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `user` int(10) unsigned zerofill NOT NULL,
  `url` varchar(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deleted` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of photo
-- ----------------------------
BEGIN;
INSERT INTO `photo` VALUES (0000000001, 0000000001, '/img/photos/40547073-32d77e60-6031-11e8-8f8c-5e9429224498.jpg', '2018-05-30 16:39:15', NULL, b'0');
INSERT INTO `photo` VALUES (0000000002, 0000000001, 'https://user-images.githubusercontent.com/6814254/40547072-32b917cc-6031-11e8-8aa3-07d0353793ee.jpg', '2018-05-30 16:39:15', NULL, b'0');
INSERT INTO `photo` VALUES (0000000003, 0000000003, 'https://user-images.githubusercontent.com/6814254/40547069-31bb4e8a-6031-11e8-88f7-ec9480b235e7.jpg', '2018-05-30 16:39:15', NULL, b'0');
INSERT INTO `photo` VALUES (0000000004, 0000000003, 'https://user-images.githubusercontent.com/6814254/40547068-31a14026-6031-11e8-9095-845f6600dd9b.jpg', '2018-05-30 16:39:15', NULL, b'0');
INSERT INTO `photo` VALUES (0000000005, 0000000003, 'https://user-images.githubusercontent.com/6814254/40547074-32f1a132-6031-11e8-9bbd-e8f9f389bca2.png', '2018-05-30 16:39:15', NULL, b'0');
INSERT INTO `photo` VALUES (0000000006, 0000000003, 'https://user-images.githubusercontent.com/6814254/40547075-330989d2-6031-11e8-9c0c-e7d690c70531.jpg', '2018-05-30 16:39:15', NULL, b'0');
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `picture` varchar(255) NOT NULL,
  `dob` timestamp NULL DEFAULT NULL,
  `subscribed` bit(1) NOT NULL DEFAULT b'1',
  `lat` float( 10, 6 ) NOT NULL ,
  `long` float( 10, 6 ) NOT NULL ,
  `activeAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deleted` bit(1) NOT NULL DEFAULT b'0',
  `tokenValidated` varchar(100) DEFAULT NULL,
  `tokenLost` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (0000000001, 'admin', 'Admin', '3bb37061e887baa3b48ebe9f060f1a42baf995fb', 'camagru.rizky@gmail.com', '/img/profiles/no-pic.jpg', '1988-05-30 16:39:15', b'1', 46.529, 6.5626, '2018-05-30 16:39:15', '2018-05-30 16:39:15', NULL, b'0', NULL, NULL);
INSERT INTO `user` VALUES (0000000002, 'deleted_admin', 'Admin', '3bb37061e887baa3b48ebe9f060f1a42baf995fb', 'deleted_admin@gmail.com', 'https://avatars1.githubusercontent.com/u/6814254?s=460&v=4', '1994-05-30 16:39:15', b'1', 46.529, 6.5626, '2018-05-30 16:39:15', '2018-05-30 16:39:15', NULL, b'1', NULL, NULL);
INSERT INTO `user` VALUES (0000000003, 'rizkyario', 'Rizky Ario', '3bb37061e887baa3b48ebe9f060f1a42baf995fb', 'rizkyario@gmail.com', '/img/profiles/no-pic.jpg', '1994-05-30 16:39:15', b'1', 46.529, 6.5626, '2018-05-30 16:39:15', '2018-05-30 16:39:15', NULL, b'0', NULL, NULL);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
