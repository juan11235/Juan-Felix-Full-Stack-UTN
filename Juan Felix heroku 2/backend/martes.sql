-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 26-05-2022 a las 13:27:19
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `felix_juan_m5_u4`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `subtitulo` text COLLATE utf8_unicode_ci NOT NULL,
  `cuerpo` text COLLATE utf8_unicode_ci NOT NULL,
  `img_id` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=19 ;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'Gobierno---Anses: quiénes deberán inscribirse para cobrar el bono de $18.000 en mayo y junio', 'Los trabajadores sin ingresos formales, monotributistas y empleados de casas particulares deberán hacer el trámite a través de la página web del organismo', 'La Anses informó este miércoles quiénes son los beneficiarios que deben inscribirse en la web del organismo para cobrar el bono de $18.000 que se pagará en dos tramos: $9.000 en mayo y $9.000 en junio. Además, aclararon que el bono de $12.000 para jubilados y pensionados se cobrará en forma automática en el mes de mayo y que habrá un proporcional para quienes superen por poco el nivel de dos jubilaciones mínimas.', NULL),
(2, 'Anses: quiénes deberán inscribirse para cobrar el bono de $18.000 en mayo y junio', 'Los trabajadores sin ingresos formales, monotributistas y empleados de casas particulares deberán hacer el trámite a través de la página web del organismo', 'La Anses informó este miércoles quiénes son los beneficiarios que deben inscribirse en la web del organismo para cobrar el bono de $18.000 que se pagará en dos tramos: $9.000 en mayo y $9.000 en junio. Además, aclararon que el bono de $12.000 para jubilados y pensionados se cobrará en forma automática en el mes de mayo y que habrá un proporcional para quienes superen por poco el nivel de dos jubilaciones mínimas.', NULL),
(7, '1', '1', '1', NULL),
(18, '888812', '888812', '888812', 'ldlwhn5is0vswocwaxo1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'juan', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
