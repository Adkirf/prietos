'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ImageGallery } from '@/components/ImageGallery';
import { FullscreenViewer } from '@/components/FullscreenViewer';
import { getTranslations } from '@/lib/utils';

export default function ProjectImagePage({
    params
}: {
    params: { lang: string; projectId: string; imageIndex: string }
}) {
    const [project, setProject] = useState<any>(null);
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
                images={project.images.map((img: any) => img.src)}
                initialIndex={imageIndex}
                onClose={handleClose}
            />
        </>
    );
}
