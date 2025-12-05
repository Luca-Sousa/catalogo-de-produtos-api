-- Criar banco de dados
CREATE DATABASE IF NOT EXISTS catalogoproduto;
USE catalogoproduto;

-- Criar tabela de produtos
CREATE TABLE IF NOT EXISTS produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  preco DECIMAL(10, 2) NOT NULL,
  descricao TEXT,
  categoria VARCHAR(100) NOT NULL,
  estoque INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_categoria (categoria),
  INDEX idx_preco (preco)
);

-- Inserir dados de exemplo
INSERT INTO produtos (nome, preco, descricao, categoria, estoque) VALUES
('Notebook Dell Inspiron', 3499.90, 'Notebook com processador Intel Core i5, 8GB RAM, 256GB SSD', 'Eletrônicos', 15),
('Mouse Logitech MX Master', 349.90, 'Mouse sem fio ergonômico de alta precisão', 'Eletrônicos', 50),
('Teclado Mecânico Keychron', 599.00, 'Teclado mecânico RGB com switches Blue', 'Eletrônicos', 30),
('Monitor LG 27 Polegadas', 1299.00, 'Monitor Full HD IPS 27 polegadas', 'Eletrônicos', 20),
('Webcam Logitech C920', 489.90, 'Webcam Full HD 1080p com microfone', 'Eletrônicos', 25),
('Cadeira Gamer DXRacer', 1799.00, 'Cadeira gamer ergonômica com ajuste de altura', 'Móveis', 10),
('Mesa para Computador', 699.00, 'Mesa de escritório com suporte para monitor', 'Móveis', 12),
('Headset HyperX Cloud II', 549.00, 'Headset gamer com som surround 7.1', 'Eletrônicos', 40),
('SSD Samsung 1TB', 549.90, 'SSD NVMe M.2 1TB de alta velocidade', 'Eletrônicos', 35),
('Gabinete Gamer RGB', 399.00, 'Gabinete ATX com iluminação RGB', 'Eletrônicos', 18);

-- Consultas úteis para teste
-- SELECT * FROM produtos;
-- SELECT * FROM produtos WHERE categoria = 'Eletrônicos';
-- SELECT * FROM produtos ORDER BY preco ASC;
-- SELECT * FROM produtos ORDER BY preco DESC;
-- SELECT DISTINCT categoria FROM produtos;
