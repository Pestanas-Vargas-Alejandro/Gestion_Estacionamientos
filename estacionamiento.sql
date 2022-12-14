-- MariaDB dump 10.19  Distrib 10.6.11-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: concesionaria
-- ------------------------------------------------------
-- Server version	10.6.11-MariaDB-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Empleados`
--

DROP TABLE IF EXISTS `Empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Empleados` (
  `N_Empleado` int(11) NOT NULL AUTO_INCREMENT,
  `Status` char(1) NOT NULL,
  `Zona` varchar(50) NOT NULL,
  `Contrasena` varchar(255) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `APaterno` varchar(50) NOT NULL,
  `AMaterno` varchar(50) NOT NULL,
  PRIMARY KEY (`N_Empleado`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Empleados`
--

LOCK TABLES `Empleados` WRITE;
/*!40000 ALTER TABLE `Empleados` DISABLE KEYS */;
INSERT INTO `Empleados` VALUES (23,'A','B','$2a$10$f4f26XsTFxP66yc10uqTt./9ux7ObHUiM00/KbzBkX.XlLyjL89di','Alejandro','Pestañas','Vargas'),(24,'5','C','$2a$10$0ih.GA91r5VcT35wC99wuOIfixBdBwo1gGzDu6cVDJwWZ0zhhuTrW','Alfredo','Pestañas','Vargas');
/*!40000 ALTER TABLE `Empleados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Zona_A`
--

DROP TABLE IF EXISTS `Zona_A`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Zona_A` (
  `Folio` int(11) NOT NULL AUTO_INCREMENT,
  `N_Empleado` int(10) NOT NULL,
  `Ingreso` timestamp NOT NULL DEFAULT current_timestamp(),
  `Placas` varchar(50) NOT NULL,
  `Marca` varchar(50) NOT NULL,
  `Modelo` varchar(50) NOT NULL,
  `Color` varchar(50) NOT NULL,
  `Cajon` int(2) NOT NULL,
  `Salida` time NOT NULL,
  `Saldo` int(10) DEFAULT NULL,
  PRIMARY KEY (`Folio`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Zona_A`
--

LOCK TABLES `Zona_A` WRITE;
/*!40000 ALTER TABLE `Zona_A` DISABLE KEYS */;
INSERT INTO `Zona_A` VALUES (5,5,'2022-12-14 11:31:54','821YBC','Ford','Fiesta','Azul',12,'07:45:00',1000);
/*!40000 ALTER TABLE `Zona_A` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Zona_B`
--

DROP TABLE IF EXISTS `Zona_B`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Zona_B` (
  `Folio` int(11) NOT NULL AUTO_INCREMENT,
  `N_Empleado` int(10) NOT NULL,
  `Ingreso` timestamp NOT NULL DEFAULT current_timestamp(),
  `Placas` varchar(50) NOT NULL,
  `Marca` varchar(50) NOT NULL,
  `Modelo` varchar(50) NOT NULL,
  `Color` varchar(50) NOT NULL,
  `Cajon` int(2) NOT NULL,
  `Salida` time NOT NULL,
  `Saldo` int(10) DEFAULT NULL,
  PRIMARY KEY (`Folio`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Zona_B`
--

LOCK TABLES `Zona_B` WRITE;
/*!40000 ALTER TABLE `Zona_B` DISABLE KEYS */;
/*!40000 ALTER TABLE `Zona_B` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Zona_C`
--

DROP TABLE IF EXISTS `Zona_C`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Zona_C` (
  `Folio` int(11) NOT NULL AUTO_INCREMENT,
  `N_Empleado` int(10) NOT NULL,
  `Ingreso` timestamp NOT NULL DEFAULT current_timestamp(),
  `Placas` varchar(50) NOT NULL,
  `Marca` varchar(50) NOT NULL,
  `Modelo` varchar(50) NOT NULL,
  `Color` varchar(50) NOT NULL,
  `Cajon` int(2) NOT NULL,
  `Salida` time NOT NULL,
  `Saldo` int(10) DEFAULT NULL,
  PRIMARY KEY (`Folio`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Zona_C`
--

LOCK TABLES `Zona_C` WRITE;
/*!40000 ALTER TABLE `Zona_C` DISABLE KEYS */;
/*!40000 ALTER TABLE `Zona_C` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-14 11:11:35
