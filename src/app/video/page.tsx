import VideoPortfolio from '@/components/VideoPortfolio';
import {videos} from '@/data/videos';
import {completeVideo} from '@/lib/complete-videos';
export const metadata={title:'AI Film Portfolio'};
export default function Page(){return <VideoPortfolio projects={videos.filter(completeVideo)}/>}
