import { PlusSquare } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { v4 as uuidv4 } from 'uuid';

const AddResume = () => {

  const [openDialogue, setOpenDialogue] = useState(false)
  const [resumeTitle, setResumeTitle] = useState()

  const onCreate = () => {
    const uuid = uuidv4();

    console.log(resumeTitle);
    console.log(uuid);
  }

  return (
    <div>
      <div className="p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[250px] hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed border-black"
      onClick={() => setOpenDialogue(true)}>
        <PlusSquare />
      </div>

      <Dialog open={openDialogue}>
        {/* <DialogTrigger>Open</DialogTrigger> */}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              <p>Add title for your new Resume</p>
              <Input className="mt-2 mb-1" placeholder="Eg. Software Developer"
              onChange={(e) => 
                // console.log(e.target.value)
                setResumeTitle(e.target.value)
              }
              />
            </DialogDescription>
            <div className="flex justify-end gap-5">
              <Button
                disabled={!resumeTitle}
                onClick={() => onCreate()}>
                Create
              </Button>
              <Button onClick={() => setOpenDialogue(false)} variant="destructive">Cancel</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      
    </div>
  )
}

export default AddResume