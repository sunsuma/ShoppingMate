import Categories from '../components/Categories'
import FeatureProducts from '../components/FeatureProducts'
import Slider from '../components/Slider'

function Home() {
  return (
    <div className='w-full'>
      <Slider/>
      <FeatureProducts type="featured"/>
      <Categories/>
      <FeatureProducts type="trending"/>
    </div>
  )
}

export default Home
