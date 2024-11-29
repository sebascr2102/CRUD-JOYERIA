import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { joyeria, } from "../entities/joyeria";

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
    const { name, description, price, imgUrl } = req.body;
    const product = new joyeria();
    product.name = name;
    product.description = description;
    product.price= price;
    product.imgUrl= imgUrl;
    await productRepository.save(product);
    res.status(201).json(product);
  } catch(error) {
    res.status(500).json({ message: "Error al crear la joyeria" });
  }
};

// PUT - Actualizar un joyeria existente
export const updateProduct = async(req: Request, res: Response) => {
  try {
    const { name, description, price, imgUrl } = req.body;
    const joyeria = await productRepository.findOneBy({
      id: parseInt(req.params.id),
    })

    if(joyeria) {
      joyeria.toString = name ?? joyeria;
      joyeria.toString = description ?? joyeria.price;
      joyeria.toString = price ?? joyeria.price;
      joyeria.toString = imgUrl ?? joyeria.price;

      await productRepository.save(joyeria);
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
      await productRepository.remove(product);
      res.json({ message: "Producto eliminado." });
    } else {
      res.status(404).json({ message: "joyeria no encontrado." });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al eliminar la joyeria." });
  }
};


// Crear un producto (POST)
export const createjoyeria= async(req: Request, res: Response) => {
  try {
    const { moda, description, price, imgUrl } = req.body;
    const joyeria = new moda (moda, description, price, imgUrl);
    joyeria.name = moda;
    joyeria.description = description;
    joyeria.price = price;
    joyeria.imgUrl = imgUrl; // <----- Aquí va la nueva línea
    await productRepository.save(joyeria);
    res.status(201).json(joyeria);
  } catch(error) {
    res.status(500).json({
      message: "Error al crear el producto."
    });
  }
};

// Actualizar un producto existente
export const updatejoyeria = async(req: Request, res: Response) => {
  try {
    const { name, description, price, imgUrl } = req.body; // Tomamos los datos del request
    
    // Buscamos el producto para actualizarlo
    const joyeria = await productRepository.findOneBy({
      id: parseInt(req.params.id)
    });

    // Validamos que product tenga información
    if (joyeria) {
      joyeria.name= name ?? joyeria.name;
      joyeria.description = description ?? joyeria.description;
      joyeria.price= price ?? joyeria.price;
      joyeria.imgUrl = imgUrl ?? joyeria.imgUrl; // <----- Aquí va la nueva línea
      await productRepository.findOneBy(joyeria); // Guardamos los cambios del producto
      res.json(joyeria);
    } else {
      res.status(404).json({
        message: "No se encontró el producto."
      });
    }
  } catch(error) {
    res.status(500).json({
      message: "Error al actualizar el producto."
    });
  }
};
