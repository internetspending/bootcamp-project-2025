import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from './projectCard.module.css';

interface Project {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  imageAlt, 
  technologies, 
  githubUrl, 
  liveUrl 
}: Project) {
  return (
    <div className={style.projectCard}>
      <div className={style.projectImage}>
        <Image 
          src={image} 
          alt={imageAlt} 
          width={400} 
          height={250}
          className={style.image}
        />
      </div>
      <div className={style.projectContent}>
        <h3 className={style.projectTitle}>{title}</h3>
        <p className={style.projectDescription}>{description}</p>
        <div className={style.technologies}>
          {technologies.map((tech, index) => (
            <span key={index} className={style.techTag}>{tech}</span>
          ))}
        </div>
        <div className={style.projectLinks}>
          {githubUrl && (
            <Link href={githubUrl} className={style.link} target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
          )}
          {liveUrl && (
            <Link href={liveUrl} className={style.link} target="_blank" rel="noopener noreferrer">
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
