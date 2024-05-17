import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import "tailwindcss/tailwind.css";

const StructurePage: React.FC = () => {
  if (typeof document === "undefined") {
    // Return null during server-side rendering
    return null;
  }

  return (
  <div className="flex justify-center p-4">
    <div className="text-white font-semibold text-sm overflow-x-auto">
      <Tree
        lineWidth={"2px"}
        lineColor={"green"}
        lineBorderRadius={"10px"}
        label={
          <div className="text-center p-2">
            <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
              <a href="/messages">
              Director
              <br />
              Department of Holistic Education
            </a>
            </button>
          </div>
        }
      >


        <TreeNode
          label={
            <div className="text-center p-2">
              <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                Working Committee
              </button>
            </div>
          }
        ></TreeNode>


        <TreeNode
          label={
            <div className="text-center p-2">
              <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">Cells</button>
            </div>
          }
        >

          <TreeNode
            label={
              <div className="text-center p-2">
                <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary"><a href="/cells/it">IT Cell</a></button>
              </div>
            }
          >
            <TreeNode
              label={
                <div className="text-center p-2">
                  <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                    <a href="/cells/event">Event Management Cell</a>
                  </button>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                      <a href="/cells/super100">Super 100 Cell</a>
                    </button>
                  </div>
                }
              />
            
            </TreeNode>
          </TreeNode>
          <TreeNode
            label={
              <div className="text-center p-2">
                <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary"><a href="/cells/ipr">IPR Cell</a></button>
              </div>
            }
          >
            <TreeNode
              label={
                <div className="text-center p-2">
                  <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                    <a href="/cells/industry">Industry Coordination Cell</a>
                  </button>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                      <a href="/cells/hei">HEI Coordination Cell</a>
                    </button>
                  </div>
                }
              />
            </TreeNode>
          </TreeNode>
          <TreeNode
            label={
              <div className="text-center p-2">
                <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                  <a href="/cells/ecommerce">E Commerce Cell</a>
                </button>
              </div>
            }
          >
            <TreeNode
              label={
                <div className="text-center p-2">
                  <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                    <a href="/cells/tms">TMS Cell</a>
                  </button>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                      <a href="/cells/udyam">Udyam Cell</a>
                    </button>
                  </div>
                }
              />
            </TreeNode>
          </TreeNode>
          <TreeNode
            label={
              <div className="text-center p-2">
                <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                  <a href="/cells/foreign">Foreign Language Cell</a>
                </button>
              </div>
            }
          >
            <TreeNode
              label={
                <div className="text-center p-2">
                  <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                    <a href="/cells/olympiad">Olympiad Cell</a>
                  </button>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                      <a href="/cells/lms">LMS Cell</a>
                    </button>
                  </div>
                }
              />
            </TreeNode>
          </TreeNode>
          <TreeNode
            label={
              <div className="text-center p-2">
                <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary"><a href="/cells/csr">CSR Cell</a></button>
              </div>
            }
          >
            <TreeNode
              label={
                <div className="text-center p-2">
                  <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                    <a href="/cells/rd">R and D Cell</a>
                  </button>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                      <a href="/cells/art">Art Cell</a>
                    </button>
                  </div>
                }
              />
            </TreeNode>
          </TreeNode>
          <TreeNode
            label={
              <div className="text-center p-2">
                <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary"><a href="/cells/atl">ATL Cell</a></button>
              </div>
            }
          >
            <TreeNode
              label={
                <div className="text-center p-2">
                  <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                    <a href="/cells/publication">Publications and Promotions Cell</a>
                  </button>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary"><a href="/cells/environment">Environment Cell</a>
                      
                    </button>
                  </div>
                }
              />
            </TreeNode>
          </TreeNode>
          <TreeNode
            label={
              <div className="text-center p-2">
                <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                  <a href="/cells/parenting">Parenting Cell</a>
                </button>
              </div>
            }
          >
            <TreeNode
              label={
                <div className="text-center p-2">
                  <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                    <a href="/cells/astrology">Astrology Cell</a>
                  </button>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                      <a href="/cells/premiumschool">Premium School Cell</a>
                    </button>
                  </div>
                }
              />
            </TreeNode>
          </TreeNode>


          <TreeNode
            label={
              <div className="text-center p-2">
                <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                  <a href="/cells/health">Health Wisdom Cell</a>
                </button>
              </div>
            }
          >
            <TreeNode
              label={
                <div className="text-center p-2">
                  <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                    <a href="/cells/sports">Sports Cell</a>
                  </button>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                      <a href="/cells/spritual">Spritual Cell</a>
                    </button>
                  </div>
                }
              >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                      <a href="/cells/grievance">Grievance Redressal Cell</a>
                    </button>
                  </div>
                }
              >
            </TreeNode>
            </TreeNode>
            </TreeNode>
            
          </TreeNode>


        </TreeNode>
       
       
        <TreeNode
          label={
            <div className="text-center p-2">
              <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                <a href="/advisory">Advisory Committee</a>
              </button>
            </div>
          }
        ></TreeNode>
      </Tree>
    </div>
  </div>
 );
};


export default StructurePage;