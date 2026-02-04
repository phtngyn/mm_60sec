import { defineCollection, defineContentConfig } from '@nuxt/content'
import * as z from 'zod'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.yml',
      schema: z.object({
        hero: z.object({
          title: z.string(),
          headline: z.string(),
          tags: z.array(z.string()),
          description: z.string(),
        }),
        profile: z.object({
          title: z.string(),
          icon: z.string(),
          tags: z.array(z.string()),
          content: z.string(),
        }),
        tasks: z.object({
          title: z.string(),
          icon: z.string(),
          tags: z.array(z.string()),
          content: z.string(),
        }),
        about: z.object({
          title: z.string(),
          content: z.string(),
          buttonLabel: z.string(),
        }),
        benefits: z.object({
          title: z.string(),
          items: z.array(z.object({
            icon: z.string(),
            title: z.string(),
            description: z.string(),
          })),
        }),
        apply: z.object({
          title: z.string(),
          steps: z.array(z.union([
            z.object({
              id: z.string(),
              type: z.literal('checkbox'),
              field: z.string(),
              title: z.string(),
              description: z.string().optional(),
              items: z.array(z.string()),
              validation: z.object({
                min: z.number().optional(),
                minMessage: z.string().optional(),
                max: z.number().optional(),
                maxMessage: z.string().optional(),
              }).optional(),
            }),
            z.object({
              id: z.string(),
              type: z.literal('radio'),
              field: z.string(),
              title: z.string(),
              description: z.string().optional(),
              items: z.array(z.string()),
              validation: z.object({
                required: z.boolean().optional(),
                requiredMessage: z.string().optional(),
              }).optional(),
            }),
            z.object({
              id: z.string(),
              type: z.literal('input'),
              field: z.string(),
              title: z.string(),
              description: z.string().optional(),
              validation: z.object({
                type: z.enum(['string', 'email', 'number']),
                minLength: z.number().optional(),
                minLengthMessage: z.string().optional(),
                maxLength: z.number().optional(),
                maxLengthMessage: z.string().optional(),
                required: z.boolean().optional(),
                requiredMessage: z.string().optional(),
                invalidMessage: z.string().optional(),
              }),
            }),
            z.object({
              id: z.string(),
              type: z.literal('multi-input'),
              field: z.string(),
              title: z.string(),
              description: z.string().optional(),
              fields: z.array(z.object({
                field: z.string(),
                label: z.string().optional(),
                validation: z.object({
                  type: z.enum(['string', 'email', 'number']),
                  minLength: z.number().optional(),
                  minLengthMessage: z.string().optional(),
                  maxLength: z.number().optional(),
                  maxLengthMessage: z.string().optional(),
                  required: z.boolean().optional(),
                  requiredMessage: z.string().optional(),
                  invalidMessage: z.string().optional(),
                }),
              })),
            }),
          ])),
        }),
        contact: z.object({
          title: z.string(),
          description: z.string(),
          buttonLabel: z.string(),
        }),
        footer: z.object({
          left: z.string(),
        }),
      }),
    }),
  },
})
