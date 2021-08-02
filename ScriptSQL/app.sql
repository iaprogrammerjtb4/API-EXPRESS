-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-08-2021 a las 11:16:37
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `app`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `app_movements`
--

CREATE TABLE `app_movements` (
  `mov_id` int(11) NOT NULL,
  `mov_id_stuff` int(11) NOT NULL,
  `mov_type` varchar(16) NOT NULL,
  `mov_description` varchar(480) NOT NULL,
  `mov_quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `app_stuffs`
--

CREATE TABLE `app_stuffs` (
  `stu_id` int(11) NOT NULL,
  `stu_name` varchar(120) NOT NULL,
  `stu_state` varchar(16) NOT NULL,
  `stu_quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `app_stuffs`
--

INSERT INTO `app_stuffs` (`stu_id`, `stu_name`, `stu_state`, `stu_quantity`) VALUES
(1, 'Stuff 1', 'NEW', 12),
(2, 'iaprogrammer', 'USED', 0),
(3, '3223750946', 'BROKEN', 0),
(4, 'Jeison Armando', 'USED', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `app_movements`
--
ALTER TABLE `app_movements`
  ADD PRIMARY KEY (`mov_id`),
  ADD KEY `stuff_id` (`mov_id_stuff`);

--
-- Indices de la tabla `app_stuffs`
--
ALTER TABLE `app_stuffs`
  ADD PRIMARY KEY (`stu_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `app_movements`
--
ALTER TABLE `app_movements`
  MODIFY `mov_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `app_stuffs`
--
ALTER TABLE `app_stuffs`
  MODIFY `stu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `app_movements`
--
ALTER TABLE `app_movements`
  ADD CONSTRAINT `app_movements_ibfk_1` FOREIGN KEY (`mov_id_stuff`) REFERENCES `app_stuffs` (`stu_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
