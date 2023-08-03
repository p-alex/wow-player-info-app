import z from 'zod';

const RegionSchema = z.enum(['eu', 'us', 'kr', 'tw', 'cn'], {
  required_error: 'Region is required',
});

export const getProtectedCharacterInfoSchema = z.object({
  query: z.object({
    region: RegionSchema,
    realm_id: z.string({ required_error: 'Realm is required' }).regex(/^[0-9]+$/g, 'Char id must contain only numbers'),
    char_id: z.string({ required_error: 'Char id is required' }).regex(/^[0-9]+$/g, 'Char id must contain only numbers'),
  }),
});

export const getSummarySchema = z.object({
  query: z.object({
    region: RegionSchema,
  }),
});

export const getCharacterInfoSchema = z.object({
  query: z.object({
    region: RegionSchema,
    realm_slug: z.string({ required_error: 'Realm slug is required' }),
    char_name: z.string({ required_error: 'Char name is required' }).min(2, 'char name must be min 2 characters long').max(12, 'Char name must be max 12 characters long'),
  }),
});

export type GetProtectedCharacterInfoInput = z.infer<typeof getProtectedCharacterInfoSchema>['query'];

export type GetSummaryInput = z.infer<typeof getSummarySchema>['query'];

export type GetCharacterInfoInput = z.infer<typeof getCharacterInfoSchema>['query'];
