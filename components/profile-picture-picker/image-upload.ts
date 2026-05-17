import { supabase } from "@/lib/supabase/supabase";

export async function imageUpload(file:File, folder:string = 'avatars'){
    
    const fileExt = file.name.split('.').pop();
    const fileName = `${crypto.randomUUID()}.${fileExt}`;

    const {data, error} = await supabase.storage.from(folder).upload(fileName,file,{
        cacheControl: '3600',
        upsert: false,
    })

    if(error){
        console.log(error);
    }

    const {data: {publicUrl}} = supabase.storage.from(folder).getPublicUrl(fileName);
    return publicUrl;
}