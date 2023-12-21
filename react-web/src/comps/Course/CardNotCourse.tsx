import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const CardNotCourse = () => {
    return (
      <div className='flex justify-center'>
            
      <Card className=' h-44 w-80' > 
              <CardTitle className='text-lg text-center items-center'>
                  Aucun cours prévu aujourd'hui
                </CardTitle>
                <div className='flex items-center'>

                <CardDescription className='text-center text-md'>
                    Vous pouvez consulter votre emploi du temps pour pouvs inscrire à un cours ou bien consulter les cours que vous avez déjà suivis.
                </CardDescription>
                </div>
          
      </Card>
      </div>
  )
}

export default CardNotCourse