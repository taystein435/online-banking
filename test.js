-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: May 08, 2024 at 04:04 AM
-- Server version: 8.3.0
-- PHP Version: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sd2-db`
--

-- --------------------------------------------------------

--
-- Table structure for table `Listeners`
--

CREATE TABLE `Listeners` (
  `ListenerId` int NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `SignupDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Listeners`
--

INSERT INTO `Listeners` (`ListenerId`, `Name`, `Email`, `Password`, `SignupDate`) VALUES
(1, 'her', 'her@gmail.com', '$2a$10$.2gJAsGc8pnfRunwGNoZmOzzBw6mH9COO56FZ4bqH86CWpp/uFEF.', '2024-04-29'),
(2, 'tay', 'tay@dev.com', '$2a$10$Oo8sRm7OfWWdJNGBGxfjceRRhxWrAmEqdlIkfunjRWsE3dYU7JFQa', '2024-04-29'),
(3, 'Faith', 'faith@dev.com', '$2a$10$ofXYqAtJPN4JgHRnER/NMeYaBf5oYzHW6oVDUaVxn4VX72PGTD1cK', '2024-04-29'),
(4, 'test24', 'test24@gamil.com', '$2a$10$uqxKn6XBkqP.ZMti3pi6YuWNKuLz5/NDWuYakDwcgnd/5BhwJoiVW', '2024-04-29');

-- --------------------------------------------------------

--
-- Table structure for table `Podcasters`
--

CREATE TABLE `Podcasters` (
  `Userid` int NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Bio` varchar(255) DEFAULT NULL,
  `Password` varchar(255) NOT NULL,
  `Gender` varchar(255) NOT NULL,
  `Shows` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Podcasters`
--

INSERT INTO `Podcasters` (`Userid`, `Name`, `Email`, `Bio`, `Password`, `Gender`, `Shows`) VALUES
(1, 'Chris Kelly', 'chris.kelly@gmail.com', 'Deep dives into the world of gaming.', 'password123', 'Male', 'GameSphere'),
(2, 'Sarah Smith', 'sarah.smith@gmail.com', 'Exploring the latest trends in technology.', 'sarah_password', 'Female', 'TechTalk'),
(3, 'John Johnson', 'john.johnson@gmail.com', 'Bringing you the best in hip-hop culture.', 'johnny', 'Male', 'HipHopHour'),
(4, 'Emily Wong', 'emily.wong@gmail.com', 'Discovering hidden gems in the world of cinema.', 'emily123', 'Female', 'CineFiles'),
(5, 'Michael Brown', 'michael.brown@gmail.com', 'Discussing mindfulness and meditation techniques.', 'meditate321', 'Male', 'MindfulLiving'),
(6, 'Jennifer Lee', 'jennifer.lee@gmail.com', 'Exploring the mysteries of the universe.', 'galaxygirl', 'Female', 'CosmicWonders'),
(7, 'David Martinez', 'david.martinez@gmail.com', 'All things sports, from basketball to soccer.', 'sportsfan1', 'Male', 'SportZone'),
(8, 'Emma Taylor', 'emma.taylor@gmail.com', 'Unveiling the secrets of successful entrepreneurship.', 'startup101', 'Female', 'StartupInsights'),
(9, 'Alex Johnson', 'alex.johnson@gmail.com', 'Insights into the world of finance and investments.', 'financeguru', 'Male', 'MoneyMatters'),
(10, 'Rachel Green', 'rachel.green@gmail.com', 'Your go-to source for healthy living tips.', 'healthylife', 'Female', 'HealthyHabits'),
(11, 'Daniel Kim', 'daniel.kim@gmail.com', 'Exploring the art and science of cooking.', 'chefdaniel', 'Male', 'CulinaryCrafts'),
(12, 'Michelle Rodriguez', 'michelle.rodriguez@gmail.com', 'Exploring the world of fashion and style.', 'fashionista', 'Female', 'StyleSpotlight'),
(13, 'Ryan Thompson', 'ryan.thompson@gmail.com', 'Discussing the latest trends in automotive engineering.', 'autoenthusiast', 'Male', 'AutoTalk'),
(14, 'Sophia White', 'sophia.white@gmail.com', 'Bringing you the best in classical music.', 'classicallover', 'Female', 'ClassicalEchoes'),
(15, 'Jacob Brown', 'jacob.brown@gmail.com', 'Exploring the world of photography and visual arts.', 'shutterbug', 'Male', 'VisualVoyage'),
(16, 'Olivia Clark', 'olivia.clark@gmail.com', 'All things related to health and fitness.', 'fitandhealthy', 'Female', 'FitnessFusion'),
(17, 'Ethan Carter', 'ethan.carter@gmail.com', 'Bringing you the latest news and updates in the gaming world.', 'gamingnews', 'Male', 'GameNewsUpdate'),
(18, 'Ava Martinez', 'ava.martinez@gmail.com', 'Discovering the world of literature and storytelling.', 'bookworm', 'Female', 'BookNook'),
(19, 'Noah Thompson', 'noah.thompson@gmail.com', 'Exploring the wonders of nature and wildlife.', 'naturelover', 'Male', 'WildlifeWonders'),
(20, 'Isabella Garcia', 'isabella.garcia@gmail.com', 'Your guide to exploring different cuisines from around the world.', 'foodieexplorer', 'Female', 'GlobalGastronomy'),
(21, 'Mason Wilson', 'mason.wilson@gmail.com', 'All about the latest developments in technology and gadgets.', 'techgeek', 'Male', 'TechTrends'),
(29, 'Sarah Smithhbh', 'sarah.smihhth@gmail.com', 'Exploring the latest trends in technology.', 'sarah_password', 'Female', 'TechTalk'),
(30, 'tyyt', 'ty@gmail.com', 'fcgvhbjnkm', '$2a$10$IEhn3Ct6nMY13hDFwwlqiuZ6uDg1vNxHH4uUmWFmiQ/0KVyYdJmku', 'male', 'drcftgvhbjkn'),
(31, 'pay', 'pay@gmail.com', 'kjhjghgf', '$2a$10$LHTDmDNFm/SwOPVVEPcoLe56q.iioNwxyAKp8TndrzSKyo2H6gCvW', 'male', 'khgfdgchj'),
(32, 'hey', 'hey@gmail.com', 'ghuijokjhbv', '$2a$10$kCM7N6Tkd/.IHI8g9S4va.bwiwQ5Oed04a65DF/NGf23zRJDWOln.', 'male', 'jhgvbnhjkl;');

-- --------------------------------------------------------

--
-- Table structure for table `Shows`
--

CREATE TABLE `Shows` (
  `Podcast_id` int NOT NULL,
  `Podcaster_id` int DEFAULT NULL,
  `Title` varchar(255) NOT NULL,
  `Description` text NOT NULL,
  `Category` varchar(255) NOT NULL,
  `CoverImageURL` varchar(255) DEFAULT NULL,
  `ReleaseDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Shows`
--

INSERT INTO `Shows` (`Podcast_id`, `Podcaster_id`, `Title`, `Description`, `Category`, `CoverImageURL`, `ReleaseDate`) VALUES
(1, 1, 'GameSphere', 'Exploring the latest in the gaming industry.', 'Gaming', 'https://plus.unsplash.com/premium_photo-1682146695688-606d25bea0ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D', '2023-02-01'),
(2, 2, 'TechTalk', 'Discussions on the latest technological advancements and innovations.', 'Technology', 'https://images.unsplash.com/photo-1581368087049-7034ed0d1e6f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D', '2023-03-15'),
(4, 4, 'CineFiles', 'Exploring classic and contemporary cinema masterpieces.', 'Movies', 'https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D', '2023-05-10'),
(5, 5, 'MindfulLiving', 'Guidance on incorporating mindfulness into everyday life.', 'Health & Wellness', 'https://plus.unsplash.com/premium_photo-1682146695688-606d25bea0ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D', '2023-06-05'),
(6, 6, 'CosmicWonders', 'Journeying through the mysteries of the cosmos and beyond.', 'Science', 'https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D', '2023-07-12'),
(7, 7, 'SportZone', 'In-depth analysis and discussions on various sports events.', 'Sports', 'https://images.unsplash.com/photo-1581368087049-7034ed0d1e6f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D', '2023-08-30'),
(8, 8, 'StartupInsights', 'Insights and advice for aspiring entrepreneurs and startups.', 'Business', 'https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D', '2023-09-25'),
(9, 9, 'MoneyMatters', 'Expert insights and tips on personal finance and investments.', 'Finance', 'https://plus.unsplash.com/premium_photo-1682146695688-606d25bea0ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D', '2023-10-18'),
(10, 10, 'HealthyHabits', 'Tips and tricks for maintaining a healthy lifestyle.', 'Health & Wellness', 'https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D', '2023-11-08'),
(11, 11, 'CulinaryCrafts', 'Exploring the artistry and science behind cooking and culinary delights.', 'Food & Cooking', 'https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D', '2023-12-22'),
(12, 12, 'StyleSpotlight', 'Spotlighting the latest trends and styles in the fashion world.', 'Fashion', 'https://plus.unsplash.com/premium_photo-1682146695688-606d25bea0ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D', '2024-01-15'),
(13, 13, 'AutoTalk', 'Discussions on the latest trends and developments in the automotive industry.', 'Automotive', 'https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D', '2024-02-28'),
(14, 14, 'ClassicalEchoes', 'Bringing you timeless classical music masterpieces.', 'Music', 'https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D', '2024-03-10'),
(15, 15, 'VisualVoyage', 'Exploring the world of visual arts and photography.', 'Art & Design', 'https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D', '2024-04-05'),
(16, 16, 'FitnessFusion', 'Fusing various fitness disciplines for a holistic approach to health.', 'Health & Wellness', 'https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D', '2024-05-20'),
(17, 17, 'GameNewsUpdate', 'Bringing you the latest news and updates from the gaming world.', 'Gaming', 'https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D', '2024-06-15'),
(18, 18, 'BookNook', 'Exploring the world of literature and storytelling.', 'Books', 'https://images.unsplash.com/photo-1581368087049-7034ed0d1e6f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D', '2024-07-08'),
(19, 19, 'WildlifeWonders', 'Discovering the wonders of nature and wildlife.', 'Nature & Environment', 'https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D', '2024-08-12'),
(20, 20, 'GlobalGastronomy', 'Embark on a culinary journey exploring cuisines from around the globe.', 'Food & Cooking', 'https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D', '2024-09-25'),
(21, 21, 'TechTrends', 'Exploring the latest trends and innovations in the world of technology.', 'Technology', 'https://plus.unsplash.com/premium_photo-1682146695688-606d25bea0ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D', '2024-10-18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Listeners`
--
ALTER TABLE `Listeners`
  ADD PRIMARY KEY (`ListenerId`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- Indexes for table `Podcasters`
--
ALTER TABLE `Podcasters`
  ADD PRIMARY KEY (`Userid`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- Indexes for table `Shows`
--
ALTER TABLE `Shows`
  ADD PRIMARY KEY (`Podcast_id`),
  ADD KEY `Podcaster_id` (`Podcaster_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Listeners`
--
ALTER TABLE `Listeners`
  MODIFY `ListenerId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Podcasters`
--
ALTER TABLE `Podcasters`
  MODIFY `Userid` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `Shows`
--
ALTER TABLE `Shows`
  MODIFY `Podcast_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Shows`
--
ALTER TABLE `Shows`
  ADD CONSTRAINT `shows_ibfk_1` FOREIGN KEY (`Podcaster_id`) REFERENCES `Podcasters` (`Userid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
