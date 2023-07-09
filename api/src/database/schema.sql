CREATE DATABASE microblog;

-- ATENÇÃO: Lembre-se de verificar se você está no console do banco de dados `microblog` para executar os comandos a seguir

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS posts (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  title VARCHAR,
  body TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL,
  user_id UUID NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id)
);
