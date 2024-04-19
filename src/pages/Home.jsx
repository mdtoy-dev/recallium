import { Button } from '@/components/ui/button'

const Home = () => {
  return (
    <div className="flex flex-col text-center items-center">
      <h1 className="font-bold text-slate-900 font-mono text-3xl">Recallium</h1>
      <img src="logo.svg" alt="logo" className="-my-8" />
      <p className="max-w-3xl text-sm sm:text-base text-neutral-800">
        Dementia is a progressive condition that affects millions of individuals
        worldwide, as well as their families and caregivers. Through education,
        support, and engagement, we aim to raise awareness about dementia and
        provide valuable resources to those impacted by the condition.
      </p>
      <Button className='mt-3'>Learn More</Button>
    </div>
  )
}
export default Home