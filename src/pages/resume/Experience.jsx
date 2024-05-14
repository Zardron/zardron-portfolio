import React, { useState } from "react";
import RAKTHERM from "../../assets/raktherm.png";
import CLOCKWORK from "../../assets/clockwork.jpg";
import ACCENTURE from "../../assets/acn.jpg";
import NINETYSIX from "../../assets/ninetysix.jpg";
import LEAR from "../../assets/lear.jpg";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Experience = () => {
  const [readMore, setReadMore] = useState({
    raktherm: false,
    clockwork: false,
    acn: false,
    ns: false,
    lear: false,
  });

  const { raktherm, clockwork, acn, ns, lear } = readMore;
  return (
    <div className="mt-4">
      <h1 className="text-xl font-bold mb-2 dark:text-white/80">Experience</h1>

      <div className="flex flex-col gap-2">
        {/* RAKTHERM */}
        <div className="flex flex-row gap-2 bg-gray-50/20 p-2 rounded-md">
          <div className="w-[15%] flex flex-col items-center">
            <div className="bg-white rounded-md p-2 h-[50px] w-full xl:h-[75px] flex items-center justify-center">
              <img src={RAKTHERM} alt="raktherm-logo" className="rounded-md" />
            </div>
          </div>

          <div className="w-[85%]">
            <div className="flex items-center justify-between">
              <p className="text-sm sm:text-[11px] lg:text-sm xl:text-lg font-medium text-white/80">
                Web Developer
              </p>
            </div>
            <p className="text-[10px] sm:text-[11px] lg:text-xs xl:text-sm text-white/80 font-light">
              RAKtherm Ultimate Piping Solution
            </p>
            <div
              className={`${
                raktherm ? "max-h-96 mb-2" : "max-h-0"
              } overflow-hidden transition-all ease-linear duration-300 text-[10px] xl:text-sm text-white/80 font-light`}
            >
              <p>Ras al Khaimah, UAE</p>
              <p>October 2022 - April 2024 (Full-time)</p>

              <div className="pt-4 text-[10px] xl:text-sm text-white/80 font-light">
                <p className="font-medium">Responsibilities:</p>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">
                    Create new web applications for company.
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">
                    Managing company web applications
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">
                    Create repository for company web applications.
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">
                    Update web application from old technology stack to new
                    stack.
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">
                    Manage company website database.
                  </div>
                </div>
              </div>
            </div>
            <p
              className="text-[10px] text-blue-300 flex flex-row items-center cursor-pointer xl:text-base"
              onClick={() =>
                setReadMore({
                  ...readMore,
                  raktherm: !raktherm,
                  clockwork: false,
                  acn: false,
                  ns: false,
                  lear: false,
                })
              }
            >
              {raktherm ? (
                <>
                  Read less
                  <MdKeyboardArrowUp className="mt-1" />
                </>
              ) : (
                <>
                  Read more
                  <MdKeyboardArrowDown className="mt-1" />
                </>
              )}
            </p>
          </div>
        </div>

        {/* CLOCKWORK */}
        <div className="flex flex-row gap-2 bg-gray-50/20 p-2 rounded-md">
          <div className="w-[15%] flex flex-col items-center">
            <div className="bg-white rounded-md p-2 h-[50px] w-full xl:h-[75px] flex items-center justify-center">
              <img
                src={CLOCKWORK}
                alt="raktherm-logo"
                className="h-full rounded-md"
              />
            </div>
          </div>

          <div className="w-[85%]">
            <div className="flex items-center justify-between">
              <p className="text-sm sm:text-[11px] lg:text-sm xl:text-lg font-medium text-white/80">
                ReactJs Developer
              </p>
            </div>
            <p className="text-[10px] sm:text-[11px] lg:text-xs xl:text-sm text-white/80 font-light">
              Clockwork Logistic System
            </p>
            <div
              className={`${
                clockwork ? "max-h-96 mb-2" : "max-h-0"
              } overflow-hidden transition-all ease-linear duration-300 text-[10px] xl:text-sm text-white/80 font-light`}
            >
              <p>California, USA</p>
              <p>July 2022 - October 2022</p>

              <div className="pt-4 text-[10px] xl:text-sm text-white/80 font-light">
                <p className="font-medium">Responsibilities:</p>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">Create a new UI.</div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">
                    Adding new functionalities.
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">
                    Refactoring existing codes.
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">
                    Update some existing functionalities.
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">
                    Maintain the existing web application of the company.
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">
                    Managing the repository for the projects.
                  </div>
                </div>
              </div>
            </div>
            <p
              className="text-[10px] text-blue-300 flex flex-row items-center cursor-pointer xl:text-base"
              onClick={() =>
                setReadMore({
                  ...readMore,
                  raktherm: false,
                  clockwork: !clockwork,
                  acn: false,
                  ns: false,
                  lear: false,
                })
              }
            >
              {clockwork ? (
                <>
                  Read less
                  <MdKeyboardArrowUp className="mt-1" />
                </>
              ) : (
                <>
                  Read more
                  <MdKeyboardArrowDown className="mt-1" />
                </>
              )}
            </p>
          </div>
        </div>

        {/* ACCENTURE */}
        <div className="flex flex-row gap-2 bg-gray-50/20 p-2 rounded-md">
          <div className="w-[15%] flex flex-col items-center">
            <div className="bg-white rounded-md p-2 h-[50px] w-full xl:h-[75px] flex items-center justify-center">
              <img
                src={ACCENTURE}
                alt="accenture-logo"
                className="h-full rounded-md"
              />
            </div>
          </div>

          <div className="w-[85%]">
            <div className="flex items-center justify-between">
              <p className="text-sm sm:text-[11px] lg:text-sm xl:text-lg font-medium text-white/80">
                Software Engineer
              </p>
            </div>
            <p className="text-[10px] sm:text-[11px] lg:text-xs xl:text-sm text-white/80 font-light">
              Accenture
            </p>
            <div
              className={`${
                acn ? "max-h-96 mb-2" : "max-h-0"
              } overflow-hidden transition-all ease-linear duration-300 text-[10px] xl:text-sm text-white/80 font-light`}
            >
              <p>Cebu, Philippines</p>
              <p>July 2021 - July 2022</p>
              <div className="pt-4 text-[10px] xl:text-sm text-white/80 font-light">
                <p className="font-medium">Responsibilities:</p>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">
                    Create a new user interface.
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">Manual Unit Testing.</div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">
                    Refactor existing codes.
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">Fixing bugs.</div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">
                    Adding / Updating Functionalities.
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">
                    Managing the repository for the projects.
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">
                    Adapted to different languages and technologies based on
                    project requirements.
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">
                    Collaborated with team members to create applications'
                    system analyses based on client requirements.
                  </div>
                </div>
              </div>
            </div>
            <p
              className="text-[10px] text-blue-300 flex flex-row items-center cursor-pointer xl:text-base"
              onClick={() =>
                setReadMore({
                  ...readMore,
                  raktherm: false,
                  clockwork: false,
                  acn: !acn,
                  ns: false,
                  lear: false,
                })
              }
            >
              {acn ? (
                <>
                  Read less
                  <MdKeyboardArrowUp className="mt-1" />
                </>
              ) : (
                <>
                  Read more
                  <MdKeyboardArrowDown className="mt-1" />
                </>
              )}
            </p>
          </div>
        </div>

        {/* NINETYSIX */}
        <div className="flex flex-row gap-2 bg-gray-50/20 p-2 rounded-md">
          <div className="w-[15%] flex flex-col items-center">
            <div className="bg-white rounded-md p-2 h-[50px] w-full xl:h-[75px] flex items-center justify-center">
              <img
                src={NINETYSIX}
                alt="accenture-logo"
                className="h-full rounded-md"
              />
            </div>
          </div>

          <div className="w-[85%]">
            <div className="flex items-center justify-between">
              <p className="text-sm sm:text-[11px] lg:text-sm xl:text-lg font-medium text-white/80">
                Web Developer
              </p>
            </div>
            <p className="text-[10px] sm:text-[11px] lg:text-xs xl:text-sm text-white/80 font-light">
              Ninety Six Group
            </p>
            <div
              className={`${
                ns ? "max-h-96 mb-2" : "max-h-0"
              } overflow-hidden transition-all ease-linear duration-300 text-[10px] xl:text-sm text-white/80 font-light`}
            >
              <p>Cebu, Philippines</p>
              <p>February 2021 - July 2021</p>
              <div className="pt-4 text-[10px] xl:text-sm text-white/80 font-light">
                <p className="font-medium">Responsibilities:</p>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">
                    Creating a client-based web application using ReactJs for
                    frontend, Laravel for backend, and MySQL for the database.
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">
                    Manage the API for the projects.
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">
                    Create / Update some functionalities
                  </div>
                </div>
              </div>
            </div>
            <p
              className="text-[10px] text-blue-300 flex flex-row items-center cursor-pointer xl:text-base"
              onClick={() =>
                setReadMore({
                  ...readMore,
                  raktherm: false,
                  clockwork: false,
                  acn: false,
                  ns: !ns,
                  lear: false,
                })
              }
            >
              {ns ? (
                <>
                  Read less
                  <MdKeyboardArrowUp className="mt-1" />
                </>
              ) : (
                <>
                  Read more
                  <MdKeyboardArrowDown className="mt-1" />
                </>
              )}
            </p>
          </div>
        </div>

        {/* LEAR */}
        <div className="flex flex-row gap-2 bg-gray-50/20 p-2 rounded-md">
          <div className="w-[15%] flex flex-col items-center">
            <div className="bg-white rounded-md p-2 h-[50px] w-full xl:h-[75px] flex items-center justify-center">
              <img
                src={LEAR}
                alt="accenture-logo"
                className="h-full rounded-md"
              />
            </div>
          </div>

          <div className="w-[85%]">
            <div className="flex items-center justify-between">
              <p className="text-sm sm:text-[11px] lg:text-sm xl:text-lg font-medium text-white/80">
                Web Developer
              </p>
            </div>
            <p className="text-[10px] sm:text-[11px] lg:text-xs xl:text-sm text-white/80 font-light">
              Lear Corporation
            </p>
            <div
              className={`${
                lear ? "max-h-96 mb-2" : "max-h-0"
              } overflow-hidden transition-all ease-linear duration-300 text-[10px] xl:text-sm text-white/80 font-light`}
            >
              <p>Cebu, Philippines</p>
              <p>April 2017 - December 2020</p>
              <div className="pt-4 text-[10px] xl:text-sm text-white/80 font-light">
                <p className="font-medium">Responsibilities:</p>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">Develop HRMS</div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">Refactor Code</div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">
                    Adding new function on their existing system
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">Debug errors</div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">
                    Creating new UI for the system
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[5%] lg:w-[1%]">▪</div>
                  <div className="w-[95%] lg:w-[99%]">
                    Update and Maintain HRMS
                  </div>
                </div>
              </div>
            </div>
            <p
              className="text-[10px] text-blue-300 flex flex-row items-center cursor-pointer xl:text-base"
              onClick={() =>
                setReadMore({
                  ...readMore,
                  raktherm: false,
                  clockwork: false,
                  acn: false,
                  ns: false,
                  lear: !lear,
                })
              }
            >
              {lear ? (
                <>
                  Read less
                  <MdKeyboardArrowUp className="mt-1" />
                </>
              ) : (
                <>
                  Read more
                  <MdKeyboardArrowDown className="mt-1" />
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
