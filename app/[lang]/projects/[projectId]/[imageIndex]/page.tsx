import { ImageGallery } from '@/components/ImageGallery';
import { FullscreenViewer } from '@/components/FullscreenViewer';
import { getDictionary } from '@/app/[lang]/dictionaries';
import type { StaticImageData } from 'next/image'

import {
    project1_1,
    project1_2,
    project1_3,
    project1_4,
    project1_5,
    project2_1,
    project2_2,
    project2_3,
    project2_4,
    project3_1,
    project3_2,
    project3_3,
} from '@/lib/assets'
type ProjectImage = {
    src: StaticImageData
    width: number
    height: number
}


const PROJECT_IMAGES: Record<number, ProjectImage[]> = {
    1: [
        { ...project1_1, width: project1_1.src.width, height: project1_1.src.height },
        { ...project1_2, width: project1_2.src.width, height: project1_2.src.height },
        { ...project1_3, width: project1_3.src.width, height: project1_3.src.height },
        { ...project1_4, width: project1_4.src.width, height: project1_4.src.height },
        { ...project1_5, width: project1_5.src.width, height: project1_5.src.height },
    ],
    2: [
        { ...project2_1, width: project2_1.src.width, height: project2_1.src.height },
        { ...project2_2, width: project2_2.src.width, height: project2_2.src.height },
        { ...project2_3, width: project2_3.src.width, height: project2_3.src.height },
        { ...project2_4, width: project2_4.src.width, height: project2_4.src.height },
    ],
    3: [
        { ...project3_1, width: project3_1.src.width, height: project3_1.src.height },
        { ...project3_2, width: project3_2.src.width, height: project3_2.src.height },
        { ...project3_3, width: project3_3.src.width, height: project3_3.src.height },
    ],
}

export default async function ProjectImagePage({
    params
}: {
    params: { lang: string; projectId: string; imageIndex: string }
}) {
    const dict = await getDictionary(params.lang);
    const projectId = parseInt(params.projectId, 10);
    const imageIndex = parseInt(params.imageIndex, 10);

    const projectImages = PROJECT_IMAGES[projectId + 1];
    const projectTitle = dict.projects.list[projectId + 1].title;


    if (!projectImages || !projectTitle) {
        console.log(projectId - 1)
        console.log('No project images or title found');
        return null;
    };

    return (
        <>
            <div className="container mx-auto px-4">
                <ImageGallery dict={dict} />
            </div>
            <FullscreenViewer
                initialIndex={imageIndex}
                lang={params.lang}
                projectId={projectId}
                project={{ title: projectTitle, images: projectImages }}
            />
        </>
    );
}
