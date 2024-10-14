'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ImageGallery } from '@/components/ImageGallery';
import { FullscreenViewer } from '@/components/FullscreenViewer';
import { getTranslations } from '@/lib/utils';

type Project = {
    title: string;
    images: {
        src: string;
        width: number;
        height: number;
    }[];
};

type Image = {
    src: string;
    width: number;
    height: number;
}

export default function ProjectImagePage({
    params
}: {
    params: { lang: string; projectId: string; imageIndex: string }
}) {
    const [project, setProject] = useState<Project | null>(null);
    const router = useRouter();
    const t = getTranslations(params.lang);
    const projectId = parseInt(params.projectId, 10);
    const imageIndex = parseInt(params.imageIndex, 10);

    useEffect(() => {
        setProject(t.projects.list[projectId]);
    }, [projectId, t]);

    const handleClose = () => {
        router.push(`/${params.lang}/projects`);
    };

    if (!project) return null;

    return (
        <>
            <div className="container mx-auto px-4">
                <ImageGallery params={{ lang: params.lang }} />
            </div>
            <FullscreenViewer
                images={project.images.map((img: Image) => img.src)}
                initialIndex={imageIndex}
                onClose={handleClose}
            />
        </>
    );
}
