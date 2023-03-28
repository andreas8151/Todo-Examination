-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: examination
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `friends`
--

DROP TABLE IF EXISTS `friends`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `friends` (
  `user_id` int NOT NULL,
  `friend_id` int NOT NULL,
  PRIMARY KEY (`user_id`,`friend_id`),
  KEY `friend_id` (`friend_id`),
  CONSTRAINT `friends_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`ID`),
  CONSTRAINT `friends_ibfk_2` FOREIGN KEY (`friend_id`) REFERENCES `users` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `friends`
--

LOCK TABLES `friends` WRITE;
/*!40000 ALTER TABLE `friends` DISABLE KEYS */;
INSERT INTO `friends` VALUES (12,12),(13,12),(14,12),(27,12),(29,12),(12,13),(14,13),(27,13),(28,13),(29,13),(12,14),(13,14),(14,14),(27,14),(28,14),(12,27),(14,27),(27,27),(28,27),(29,27),(28,28),(29,28);
/*!40000 ALTER TABLE `friends` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `todos`
--

DROP TABLE IF EXISTS `todos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `todos` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `title` varchar(45) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `completed` int DEFAULT '0',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`ID`),
  CONSTRAINT `todos_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`ID`),
  CONSTRAINT `todos_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=259 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `todos`
--

LOCK TABLES `todos` WRITE;
/*!40000 ALTER TABLE `todos` DISABLE KEYS */;
INSERT INTO `todos` VALUES (118,17,'fdfd','dfd',0),(119,17,'gfdgf','dfgfd',0),(120,17,'fgf','fgf',1),(176,25,'frde','fredde',0),(179,14,'laga mat','vego',1),(180,14,'9h','träna',1),(216,27,'köp mjöl','2l',1),(217,27,'städa','föfan',1),(218,27,'klipp gräset','2h',0),(219,27,'plugga','5h',0),(220,13,'gå ut med hund','ler?',1),(221,13,'städa','allt',0),(222,13,'drick','vatten',1),(223,13,'sola','9h',0),(224,14,'test','test',1),(225,14,'köp mat','gott',1),(226,14,'god mat','tack',1),(227,14,'aflygwe','ddaE',1),(228,14,'ät ','gröt',1),(229,14,'spring','1km',0),(231,29,'tst','sts',0),(232,29,'fsad','dsa',0),(233,29,'fdsf','sdfs',0),(234,29,'dasd','ddasd',0),(251,14,'dsa','dsa',0),(258,12,'hio','hjkl',0);
/*!40000 ALTER TABLE `todos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `password_UNIQUE` (`password`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (12,'fredde','$2b$10$XESPgNTby.OMFJ6St5DGYe3tAPZ4o8KjD.UT73geR/Vpvr34Lkbpu'),(13,'andreas','$2b$10$RgL1YDjbm81pD77rTZHxmO1viYSRUF.YfsRqlrsr1vx3H87D7q3Ga'),(14,'sofia','$2b$10$uHMPKNf0CJsoMufGK3.dreREd11swwmtv.aUHeBFxX88re7D1XSyO'),(17,'pappa','$2b$10$RFGBryoiNubk6TvHHORAAOpchWvCTYZY.ZBDYWfeziCekJxcLaENK'),(18,'aaa','$2b$10$SuYbrzD65eNLyKGNXzWLQ.PjpjrA0e8ZbKlvUZq74.pFfI0A3jb.S'),(19,'fdsfds','$2b$10$hetPQtxkLxjdcwz9QWmZHu0ebMYR7qU.DNIb/rdFFSvupoDcbN5yu'),(20,'asdsad','$2b$10$iUk/mi6xnT/XNipSX1GrHe5qtkd8oERTfYwCCyI4XHvtv.2R4qHwO'),(21,'reg','$2b$10$6gyvzM5srvEtUwUfpFDyW.MtfhMxwrmxdkPoQlqWfIZgi9xz9JGbC'),(23,'gfdgs','$2b$10$CIy9tFCOLR6H30zBOXwAP.wIX9tlQf8z3v41gmU11u73i57iS8bey'),(25,'frde','$2b$10$3eX5u7wpk2rKgKdKUjEgketJrWihfML/bkiEaAMtKj/VAU0X00AAu'),(26,'hej','$2b$10$R//nHCtsatc.dzWAbGUaxeOWUFyKbboOauDreDEclYpen.NfEY1WS'),(27,'kalle','$2b$10$EqQ7oxhPIB97hnYbM3uv7uQ.QX31hWgLkmWwvHoBsZv8p9SqUS.hO'),(28,'eric','$2b$10$.swNZAOUzohL2nc9vAQSLu5dh/30Pw7UZmZ0DS.pcGDONDrM719TW'),(29,'test','$2b$10$bwg/cwIqYWt98Tk07yyqeuCJP5hPdHSxyPz2YZFK6sSGBBoOZ8jfG'),(30,'sdsadsadasdasdsdasd','$2b$10$GKUzIIBS3kBhjuqr/f4awOvgQhW526YIFrsdU5n2b9/N.PPSQBR8i'),(33,'sdsadsadas','$2b$10$IammCEdxBDLoktuoSK7fK.vS.IpVk62PuOrPzA5Xl2HgpQ9QMZPHy');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-21 10:27:21
