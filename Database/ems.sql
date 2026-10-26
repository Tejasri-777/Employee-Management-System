CREATE DATABASE  IF NOT EXISTS `employee_management_system` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `employee_management_system`;
-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: localhost    Database: employee_management_system
-- ------------------------------------------------------
-- Server version	8.0.46

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ems`
--

DROP TABLE IF EXISTS `ems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ems` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `doj` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `project` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ems`
--

LOCK TABLES `ems` WRITE;
/*!40000 ALTER TABLE `ems` DISABLE KEYS */;
INSERT INTO `ems` VALUES (2,'2024-11-20','priya.krupavalli@gmail.com','Priya Krupavalli','Banking Application'),(6,'2025-09-20','oli123@gmail.com','Mary Olivia','AI and LS'),(7,'2027-04-26','michael.prince@gmail.com','Michael Prince','AI-DS'),(9,'2003-08-30','m.david@gmail.com','David Mangaraju','Business Operations'),(10,'2000-05-18','miriyam.g@gmail.com','Miriyam G','Resposible Operations'),(11,'2018-07-14','puri.g@gmail.com','Purnima G','BPO'),(13,'2023-05-31','viru.aroma@gmail.com','Vironica aroma','Health care'),(14,'2025-08-14','ruth.flower@gmail.com','Ruth Boyaz','DIS'),(15,'2026-05-25','susannagrace123@gmail.com','Susanna Grace','Backend String Coding'),(16,'2020-08-12','jemmi.rodrig@gmail.com','Jemimah Rodrigues','Sports Team'),(17,'2001-09-20','daniel.john@gmail.com','Daniel John','Animation section'),(19,'2007-04-20','cecil.ronald@gmail.com','Cecil ronald','SAP'),(20,'1992-05-20','joseph.joshii@gmail.com','Joseph Josiah','Finance Management'),(21,'2020-09-03','sarah.sama@gmail.com','Sarah Samaira','Health Department'),(22,'2023-02-19','gideon.gebah@gmail.com','Gideon Gebah','ERU');
/*!40000 ALTER TABLE `ems` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-10-26 13:05:16
