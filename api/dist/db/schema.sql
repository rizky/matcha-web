SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema matcha
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `matcha` ;

-- -----------------------------------------------------
-- Schema matcha
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `matcha` DEFAULT CHARACTER SET utf8 ;
USE `matcha` ;

-- -----------------------------------------------------
-- Table `matcha`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `matcha`.`user` (
  `id` INT(10) zerofill NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `subscribed` BIT(1) NOT NULL DEFAULT 1,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL,
  `deleted` BIT(1) NOT NULL DEFAULT 0,
  `tokenValidated` VARCHAR(100) NULL,
  `tokenLost` VARCHAR(100) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `matcha`.`photo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `matcha`.`photo` (
  `id` INT(10) zerofill NOT NULL AUTO_INCREMENT,
  `user` INT(10) zerofill NOT NULL,
  `url` VARCHAR(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL,
  `deleted` BIT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `matcha`.`comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `matcha`.`comment` (
  `id` INT(10) zerofill NOT NULL AUTO_INCREMENT,
  `user` INT(10) zerofill NOT NULL,
  `photo` INT(10) zerofill NOT NULL,
  `message` VARCHAR(255) NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL,
  `deleted` BIT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `matcha`.`like`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `matcha`.`like` (
  `id` INT(10) zerofill NOT NULL AUTO_INCREMENT,
  `user` INT(10) zerofill NOT NULL,
  `photo` INT(10) zerofill NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL,
  `deleted` BIT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;