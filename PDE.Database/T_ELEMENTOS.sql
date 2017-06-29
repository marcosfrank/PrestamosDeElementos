﻿CREATE TABLE [dbo].[T_ELEMENTOS]
(
    [Id] BIGINT NOT NULL PRIMARY KEY IDENTITY, 
    [Descripcion] NCHAR(20) NOT NULL, 
    [Id_Categoria] BIGINT NOT NULL, 
    CONSTRAINT [FK_T_ELEMENTOS_T_CATEGORIAS] FOREIGN KEY (Id_Categoria) REFERENCES T_CATEGORIAS(Id)
)
