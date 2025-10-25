import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from './blogPreview.module.css';
import type { Blog } from '../app/blogData';

export default function BlogPreview({ title, date, description, image, imageAlt, slug }: Blog) {
  return (
    <div className={style.blogCard}>
      <div className={style.blogMeta}>
        <span className={style.blogDate}>{date}</span>
      </div>
      <h2 className={style.blogTitle}>{title}</h2>
      <p className={style.blogExcerpt}>{description}</p>
      <Link href={`/blog/${slug}`} className={style.readMore}>
        Read More →
      </Link>
    </div>
  );
}
