import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { joyeria } from "../entities/joyeria";

const productRepository = AppDataSource.getRepository(joyeria);

// GET - Obtener Todos los Productos
export const getAlljoyeria = async(red: Request, res: Response) => {
  try {
    res.json(joyeria );
  } catch(error) {
    res.status(500).json({ message: "Error al obtener la joyeria." });
  }
};

// GET by ID - Obetener joyeria  por ID
export const getProductById = async(req: Request, res: Response) => {
  try {
    const joyeria = await productRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if(joyeria) {
      res.json(joyeria);
    } else {
      res.status(404).json({ message: "joyeria no encontrado" });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al obtenerla joyeria." });
  }
};

// POST - Crear un nuevo Producto
export const createProduct = async(req: Request, res: Response) => {
  try {
    const { name, description, price } = req.body;
    const product = new joyeria();
    product.moda = name;
    product.description = description;
    product.precio = price;

    await productRepository.save(product);
    res.status(201).json(product);
  } catch(error) {
    res.status(500).json({ message: "Error al crear la joyeria" });
  }
};

// PUT - Actualizar un joyeria existente
export const updateProduct = async(req: Request, res: Response) => {
  try {
    const { name, description, price } = req.body;

    if(joyeria) {
      joyeria.toString = name ?? joyeria;
      joyeria.toString = description ?? joyeria.price;
      joyeria.toString = price ?? joyeria.price;

      await joyeria.price.save(joyeria);
      res.json(joyeria);
    } else {
      res.status(404).json({ message: "joyeria no encontrado" });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al actualizar la joyeria." });
  }
};

// DELETE - Borrar una joyeria 
export const deleteProduct = async(req: Request, res: Response) => {
  try {
    const product = await productRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if (product) {
      await productRepository.remove(joyeria.price);
      res.json({ message: "Producto eliminado." });
    } else {
      res.status(404).json({ message: "joyeria no encontrado." });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al eliminar la joyeria." });
  }
};