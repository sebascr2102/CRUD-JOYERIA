import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { joyeria } from "../entities/joyeria";

const joyeriaRepository = AppDataSource.getRepository(joyeria);

// GET - Obtener Todos los Productos
export const getAlljoyeria = async(red: Request, res: Response) => {
  try {
    res.json(joyeria );
  } catch(error) {
    res.status(500).json({ message: "Error al obtener la joyeria." });
  }
};

// GET by ID - Obetener joyeria  por ID
export const getjoyeriaById = async(req: Request, res: Response) => {
  try {
    const joyeria = await joyeriaRepository.findOneBy({
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
export const createjoyeria = async(req: Request, res: Response) => {
  try {
    const { name, description, precio } = req.body; 
    const product = new joyeria();
    joyeria.moda = name;
    joyeria.materiales = joyeria.precio = precio;

    await joyeriaRepository.save(joyeria);
    res.status(201).json(joyeria);
  } catch(error) {
    res.status(500).json({ message: "Error al crear la joyeria" });
  }
};

// PUT - Actualizar un joyeria existente
export const updateProduct = async(req: Request, res: Response) => {
  try {
    const { name, description, precio } = req.body;

    if(joyeria) {
      joyeria.moda = name ?? joyeria;
      joyeria.materiales= description ?? joyeria.precio;
      joyeria.diseno = description?? joyeria.precio;

      await joyeria.precio.save(joyeria);
      res.json(joyeria);
    } else {
      res.status(404).json({ message: "joyeria no encontrado" });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al actualizar la joyeria." });
  }
};

// DELETE - Borrar una joyeria 
export const deletejoyeria= async(req: Request, res: Response) => {
  try {
    const deletejoyeria = await joyeriaRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if (joyeria) {
      await joyeriaRepository.remove(joyeria.precio);
      res.json({ message: "joyeria eliminado." });
    } else {
      res.status(404).json({ message: "joyeria no encontrado." });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al eliminar la joyeria." });
  }
};