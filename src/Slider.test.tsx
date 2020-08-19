import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' 
import Slider from './Slider'

describe('Components: Slider', () => {

  test('render should work', () => {
    render(<Slider items={[]} itemsPerSlide={1} />)
  })

  test('render should display a element', () => {
    const elements = [
      (<div>My Element</div>)
    ]

    const { getByText } = render(<Slider items={elements as []} itemsPerSlide={1} />)

    expect(getByText('My Element')).toBeInTheDocument()
  })
  
})
