interface PageProps {
    params: Promise<{ videoId: string }>;
}

const Page = async ( {params}: PageProps ) => {
    const { videoId } = await params;

    return ( 
        <div>
            Video page! {videoId}
        </div>
     );
}
 
export default Page;