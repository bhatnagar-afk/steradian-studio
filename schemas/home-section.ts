import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'home-section',
  title: 'Home Section',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({
      name: 'content',
      title: 'Content (Bullet Points)',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      options: {layout: 'grid'},
    }),
  ],
})
