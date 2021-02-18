import React from 'react'
import ExperienceBar from './ExperienceBar'

function ExperienceTimeline() {
    const experienceYears = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];

    return (
        <div className="container mx-auto grid grid-cols-8 gap-x-4 gap-y-0 my-12">

            <div className="top-fill-wrapper col-span-8">
                <div className="grid grid-cols-8">
                    <div className="magister-bar">
                        <div className="grid grid-cols-12">
                            <ExperienceBar itemClass="bg-magister-color col-start-10 col-end-11" />
                        </div>
                    </div>

                    <div className="wetaca-bar col-start-4 col-end-6">
                        <div className="grid grid-cols-24">
                            <ExperienceBar itemClass="bg-wetaca-color col-start-11 col-end-17" />
                        </div>
                    </div>

                    <div className="baby-bar col-start-6 col-end-9">
                        <div className="grid grid-cols-36">
                            <ExperienceBar itemClass="bg-baby-color col-start-6 col-end-26" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="timeline-bar col-span-8">
                <div className="grid grid-cols-8 gap-1">
                    {experienceYears.map((year) => 
                        <div className="bg-gray-200 text-gray-400 text-center text-lg">{year}</div>
                    )}
                </div>
            </div>
            
            <div className="bottom-fill-wrapper col-span-8">
                <div className="grid grid-cols-2">
                    <div className="cbi-bar">
                        <div className="grid grid-cols-4">
                            <div className="grid grid-cols-48 col-span-4">
                                <ExperienceBar itemClass="bg-cbi-color col-start-11 col-end-47" />
                            </div>
                        </div>
                    </div>

                    <div className="redegal-bar">
                        <div className="grid grid-cols-4">
                            <div className="grid grid-cols-24 col-span-2">
                                <ExperienceBar itemClass="bg-redegal-color col-start-5 col-end-19" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ExperienceTimeline;