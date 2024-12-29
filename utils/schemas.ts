import { z, ZodSchema } from "zod";

// Profile Schema
export const profileSchema = z.object({
  firstName: z.string().min(2, { message: "ชื่อ ต้องมากกว่า 2 อักขระ" }),
  lastName: z.string().min(2, { message: "นามสกุล ต้องมากกว่า 2 อักขระ" }),
  userName: z.string().min(2, { message: "username ต้องมากกว่า 2 อักขระ" }),
});

// Image Validation
const validateImage = () => {
  const maxFileSize = 1024 * 1024; // 1MB
  return z.instanceof(File).refine((file) => {
    return file.size <= maxFileSize;
  }, "File size must be less than 1MB");
};

// Image Schema
export const imageSchema = z.object({
  image: validateImage(),
});



// Anime Schema
export const animeSchema = z.object({
  title: z
    .string()
    .min(2, { message: "ชื่ออนิเมะต้องมากกว่า 2 อักขระ" })
    .max(100, { message: "ชื่ออนิเมะต้องน้อยกว่า 100 อักขระ" }),
  synopsis: z
    .string()
    .min(10, { message: "เรื่องย่อต้องมีอย่างน้อย 10 อักขระ" })
    .max(2000, { message: "เรื่องย่อต้องไม่เกิน 2000 อักขระ" }),
  genre: z.array(z.string()).nonempty({ message: "ต้องเลือกประเภทอย่างน้อย 1 ประเภท" }),
  episodes: z
    .coerce.number()
    .int()
    .min(1, { message: "ต้องมีจำนวนตอนอย่างน้อย 1 ตอน" }),
  releaseDate: z.coerce.date({ invalid_type_error: "ต้องเป็นวันที่ที่ถูกต้อง" }),
  status: z.enum(["Airing", "Completed", "Upcoming"], {
    errorMap: () => ({ message: "สถานะต้องเป็น Airing, Completed หรือ Upcoming" }),
  }),
  producers: z
    .array(z.string())
    .optional()
    .default([]), 
  licensors: z
    .array(z.string())
    .optional()
    .default([]), 
  studios: z
    .array(z.string())
    .optional()
    .default([]), 
  premiered: z
    .string()
    .max(50, { message: "ข้อมูลต้องไม่เกิน 50 อักขระ" })
    .nullable()
    .optional(),
  aired: z
    .string()
    .max(100, { message: "ข้อมูลต้องไม่เกิน 100 อักขระ" })
    .nullable()
    .optional(),
  broadcast: z
    .string()
    .max(100, { message: "ข้อมูลต้องไม่เกิน 100 อักขระ" })
    .nullable()
    .optional(),
  duration: z
    .string()
    .max(50, { message: "ข้อมูลต้องไม่เกิน 50 อักขระ" })
    .nullable()
    .optional(),
  score: z
    .number()
    .min(0, { message: "คะแนนต้องไม่ต่ำกว่า 0" })
    .max(10, { message: "คะแนนต้องไม่เกิน 10" })
    .optional()
    .nullable(),
  popularity: z
    .number()
    .int()
    .min(0, { message: "ค่าความนิยมต้องไม่ต่ำกว่า 0" })
    .optional()
    .nullable(),
  members: z
    .number()
    .int()
    .min(0, { message: "จำนวนสมาชิกต้องไม่ต่ำกว่า 0" })
    .optional()
    .nullable(),
  favorites: z
    .number()
    .int()
    .min(0, { message: "จำนวน Favorite ต้องไม่ต่ำกว่า 0" })
    .optional()
    .nullable(),
  animeSimpleUrl: z
    .string()
    .max(100, { message: "ข้อมูลต้องไม่เกิน 100 อักขระ" })
    .nullable()
    .optional(),
});


// Character Schema
export const characterSchema = z.object({
  name: z.string().min(2, { message: "ชื่อตัวละครต้องมากกว่า 2 อักขระ" }),
  role: z.enum(["Main", "Supporting"], {
    errorMap: () => ({ message: "บทบาทต้องเป็น Main หรือ Supporting" }),
  }),
  description: z
    .string()
    .min(10, { message: "รายละเอียดต้องมีอย่างน้อย 10 อักขระ" })
    .max(500, { message: "รายละเอียดต้องไม่เกิน 500 อักขระ" }),
  animeId: z.string().uuid({ message: "รหัส Anime ต้องเป็น UUID ที่ถูกต้อง" }), // เพิ่มฟิลด์ animeId
});

// Review Schema
export const reviewSchema = z.object({
  content: z
    .string()
    .min(10, { message: "เนื้อหาการรีวิวต้องมีอย่างน้อย 10 อักขระ" })
    .max(1000, { message: "เนื้อหาการรีวิวต้องไม่เกิน 1000 อักขระ" }),
  rating: z.coerce.number().int().min(1).max(10, {
    message: "คะแนนต้องอยู่ระหว่าง 1 ถึง 10",
  }),
});

// Validation Utility
export const validateWithZod = <T>(schema: ZodSchema<T>, data: unknown): T => {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error?.errors.map((error) => error.message);
    throw new Error(errors.join(", "));
  }
  return result.data;
};
