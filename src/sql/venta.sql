-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: bdvr8azxmbi608mwwnsg-mysql.services.clever-cloud.com:3306
-- Generation Time: Sep 01, 2021 at 03:24 AM
-- Server version: 8.0.15-5
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
/*SET AUTOCOMMIT = 0;
START TRANSACTION;*/

--
-- Database: `bdvr8azxmbi608mwwnsg`
--

-- --------------------------------------------------------

--
-- Table structure for table `cliente`
--

CREATE TABLE `cliente` (
  `idcliente` int(11) NOT NULL,
  `RFC` varchar(50) DEFAULT NULL,
  `nombre` varchar(80) DEFAULT NULL,
  `telefono` varchar(50) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `dateadd` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- --------------------------------------------------------

--
-- Table structure for table `compras`
--

CREATE TABLE `compras` (
  `idcompra` int(11) NOT NULL,
  `codproducto` int(11) DEFAULT NULL,
  `fecha` datetime DEFAULT CURRENT_TIMESTAMP,
  `cantidad` int(11) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `usuario_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `compras`
--

INSERT INTO `compras` (`idcompra`, `codproducto`, `cantidad`, `precio`, `usuario_id`) VALUES
(6, 6, 6666, '55.00', 25),
(7, 7, 6666, '55.00', 25),
(8, 8, 6666, '55.00', 25),
(12, 7, 400, '150.00', 25),
(13, 6, 200, '200.00', 25),
(14, 7, 100, '333.00', 25),
(15, 7, 100, '333.00', 25),
(16, 6, 122, '222.00', 25),
(17, 6, 12, '222.00', 25),
(18, 6, 1, '111.00', 25),
(19, 6, 2, '2222.00', 25),
(20, 6, 2, '3333.00', 25),
(21, 6, 3, '3333.00', 25),
(22, 6, 3, '3333.00', 25),
(23, 6, 3, '3333.00', 25),
(24, 6, 3, '3333.00', 25),
(25, 6, 3, '3333.00', 25),
(26, 6, 22, '2222.00', 25),
(27, 6, 2, '2222.00', 25);

-- --------------------------------------------------------

--
-- Table structure for table `detallefactura`
--

CREATE TABLE `detallefactura` (
  `idFactura` bigint(11) NOT NULL,
  `nofactura` bigint(11) DEFAULT NULL,
  `uuid` varchar(25) NOT NULL,
  `Producto` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `Preciototal` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `detalle_temp`
--

CREATE TABLE `detalle_temp` (
  `idFactura` bigint(11) NOT NULL,
  `nofactura` bigint(11) DEFAULT NULL,
  `Producto` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `Preciototal` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `empleados`
--

CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(64) NOT NULL DEFAULT '0',
  `url` varchar(50) DEFAULT NULL,
  `nameImage` varchar(20) NOT NULL,
  `ApellidoPaterno` varchar(64) NOT NULL DEFAULT '0',
  `ApellidoMaterno` varchar(64) NOT NULL DEFAULT '0',
  `Telefono` varchar(50) NOT NULL DEFAULT '0',
  `Direccion` varchar(256) NOT NULL DEFAULT '0',
  `Email` varchar(128) NOT NULL DEFAULT '0',
  `Usuario` varchar(64) NOT NULL DEFAULT '0',
  `Password` char(200) NOT NULL DEFAULT '0',
  `Rol` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `empleados`
--

INSERT INTO `empleados` (`id`, `Nombre`, `url`, `nameImage`, `ApellidoPaterno`, `ApellidoMaterno`, `Telefono`, `Direccion`, `Email`, `Usuario`, `Password`, `Rol`) VALUES
(26, 'Jacobo', '', '', 'Hernandez', 'Mendieta', '2462187141', '', 'test@test.com', 'test', '$2a$15$5MjDarke6OEvPfJHIR47CeaIcDcvr0kDcjhCdJd2ssTaWJGT7DtYy', 2),
(27, 'Jacobo2', '', '', 'Hernandez', 'Mendieta', '2471313141', '', 'example@example.com', 'test2', '$2a$15$snHy5S6s9lrMKfeefXbx/OeJ7hpDC3IBaOfZ9kqE4K0sFfp3nIpXi', 2),
(28, 'Jacobo3', '', '', 'Hernandez', 'Mendieta', '2471313141', '', 'example3@example.com', 'test3', '$2a$15$vetfzpEpgrnRmNwVitb1XOsomwm0ezjK352LV29gf9Gc9mt7fkYVG', 2),
(29, 'Jacobo4', '', '', 'Hernandez', 'Mendieta', '2471313141', '', 'example4@example.com', 'test4', '$2a$15$IbH/MC6uabZxm7e0HzmZm.OEJYtoHNYFPaUcTibt8khylHwXDMSK6', 2);

-- --------------------------------------------------------

--
-- Table structure for table `factura`
--

CREATE TABLE `factura` (
  `nofactura` bigint(16) NOT NULL,
  `fecha` datetime DEFAULT NULL,
  `usuario` int(11) DEFAULT NULL,
  `totalfactura` int(11) DEFAULT NULL,
  `codcliente` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `producto`
--

CREATE TABLE `producto` (
  `CodigoP` int(11) NOT NULL,
  `Nombre` varchar(200) DEFAULT NULL,
  `Precio` decimal(10,2) DEFAULT NULL,
  `Existencia` int(11) DEFAULT NULL,
  `Proveedor` int(11) DEFAULT NULL,
  `foto` text,
  `usuario_id` int(11) DEFAULT NULL,
  `date_add` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `producto`
--

INSERT INTO `producto` (`CodigoP`, `Nombre`, `Precio`, `Existencia`, `Proveedor`, `foto`, `usuario_id`) VALUES
(6, 'Libreta', '78.21', 7044, 2, '../img/caja.png', 25),
(7, 'Libretas', '67.88', 7266, 2, 'img_f32ba962095e0d0c0e6cef359114f76e.jpg', 25),
(8, 'Libreta', '55.00', 6666, 2, '../img/caja.png', 25);

-- --------------------------------------------------------

--
-- Table structure for table `proveedor`
--

CREATE TABLE `proveedor` (
  `idProveedor` int(11) NOT NULL,
  `Razon` varchar(100) NOT NULL,
  `Representante` varchar(100) NOT NULL,
  `Telefono` varchar(50) NOT NULL,
  `RFC` varchar(50) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `dateadd` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `proveedor`
--

INSERT INTO `proveedor` (`idProveedor`, `Razon`, `Representante`, `Telefono`, `RFC`, `usuario_id`) VALUES
(2, 'BIC', 'Claudia Rosales H', '2461888122', 'HSGDGDGBCA222', 25);

-- --------------------------------------------------------

--
-- Table structure for table `rol`
--

CREATE TABLE `rol` (
  `idRol` int(11) NOT NULL,
  `rol` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rol`
--

INSERT INTO `rol` (`idRol`, `rol`) VALUES
(1, 'Administrador'),
(2, 'Supervisor'),
(3, 'Empleado');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`idcliente`),
  ADD KEY `FK_cliente_empleados` (`usuario_id`);

--
-- Indexes for table `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`idcompra`),
  ADD KEY `FK_compras_producto` (`codproducto`),
  ADD KEY `FK_compras_empleados` (`usuario_id`);

--
-- Indexes for table `detallefactura`
--
ALTER TABLE `detallefactura`
  ADD PRIMARY KEY (`idFactura`),
  ADD KEY `FK_detallefactura_factura` (`nofactura`),
  ADD KEY `FK_detallefactura_producto` (`Producto`);

--
-- Indexes for table `detalle_temp`
--
ALTER TABLE `detalle_temp`
  ADD PRIMARY KEY (`idFactura`),
  ADD KEY `FK_detalle_temp_factura` (`nofactura`),
  ADD KEY `FK_detalle_temp_producto` (`Producto`);

--
-- Indexes for table `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_empleados_rol` (`Rol`);

--
-- Indexes for table `factura`
--
ALTER TABLE `factura`
  ADD PRIMARY KEY (`nofactura`),
  ADD KEY `FK_factura_empleados` (`usuario`),
  ADD KEY `FK_factura_cliente` (`codcliente`);

--
-- Indexes for table `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`CodigoP`),
  ADD KEY `FK_producto_proveedor` (`Proveedor`),
  ADD KEY `FK_producto_empleados` (`usuario_id`);

--
-- Indexes for table `proveedor`
--
ALTER TABLE `proveedor`
  ADD PRIMARY KEY (`idProveedor`),
  ADD KEY `FK_proveedor_empleados` (`usuario_id`);

--
-- Indexes for table `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`idRol`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cliente`
--
ALTER TABLE `cliente`
  MODIFY `idcliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `compras`
--
ALTER TABLE `compras`
  MODIFY `idcompra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `detallefactura`
--
ALTER TABLE `detallefactura`
  MODIFY `idFactura` bigint(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `detalle_temp`
--
ALTER TABLE `detalle_temp`
  MODIFY `idFactura` bigint(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

