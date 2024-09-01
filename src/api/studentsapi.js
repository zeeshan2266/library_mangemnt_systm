import supabase from "@/utlis/supabase";


export const getstudents= async () => {
        const { data: students, error } = await supabase.from('students').select('*');
    
          
          if(error){
            console.log(error);
            throw new Error ("Error while getting list of books. try again later.");
          }
          return students;
        };