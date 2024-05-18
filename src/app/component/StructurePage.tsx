import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import "tailwindcss/tailwind.css";
import Link from "next/link";

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
              <Link href="/messages">
              Director
              <br />
              Department of Holistic Education
            </Link>
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
                <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary"><Link href="/cells/it">IT Cell</Link></button>
              </div>
            }
          >
            <TreeNode
              label={
                <div className="text-center p-2">
                  <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                    <Link href="/cells/event">Event Management Cell</Link>
                  </button>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                      <Link href="/cells/super100">Super 100 Cell</Link>
                    </button>
                  </div>
                }
              />
            
            </TreeNode>
          </TreeNode>
          <TreeNode
            label={
              <div className="text-center p-2">
                <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary"><Link href="/cells/ipr">IPR Cell</Link></button>
              </div>
            }
          >
            <TreeNode
              label={
                <div className="text-center p-2">
                  <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                    <Link href="/cells/industry">Industry Coordination Cell</Link>
                  </button>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                      <Link href="/cells/hei">HEI Coordination Cell</Link>
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
                  <Link href="/cells/ecommerce">E Commerce Cell</Link>
                </button>
              </div>
            }
          >
            <TreeNode
              label={
                <div className="text-center p-2">
                  <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                    <Link href="/cells/tms">TMS Cell</Link>
                  </button>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                      <Link href="/cells/udyam">Udyam Cell</Link>
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
                  <Link href="/cells/foreign">Foreign Language Cell</Link>
                </button>
              </div>
            }
          >
            <TreeNode
              label={
                <div className="text-center p-2">
                  <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                    <Link href="/cells/olympiad">Olympiad Cell</Link>
                  </button>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                      <Link href="/cells/lms">LMS Cell</Link>
                    </button>
                  </div>
                }
              />
            </TreeNode>
          </TreeNode>
          <TreeNode
            label={
              <div className="text-center p-2">
                <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary"><Link href="/cells/csr">CSR Cell</Link></button>
              </div>
            }
          >
            <TreeNode
              label={
                <div className="text-center p-2">
                  <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                    <Link href="/cells/rd">R and D Cell</Link>
                  </button>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                      <Link href="/cells/art">Art Cell</Link>
                    </button>
                  </div>
                }
              />
            </TreeNode>
          </TreeNode>
          <TreeNode
            label={
              <div className="text-center p-2">
                <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary"><Link href="/cells/atl">ATL Cell</Link></button>
              </div>
            }
          >
            <TreeNode
              label={
                <div className="text-center p-2">
                  <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                    <Link href="/cells/publication">Publications and Promotions Cell</Link>
                  </button>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary"><Link href="/cells/environment">Environment Cell</Link>
                      
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
                  <Link href="/cells/parenting">Parenting Cell</Link>
                </button>
              </div>
            }
          >
            <TreeNode
              label={
                <div className="text-center p-2">
                  <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                    <Link href="/cells/astrology">Astrology Cell</Link>
                  </button>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                      <Link href="/cells/premiumschool">Premium School Cell</Link>
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
                  <Link href="/cells/health">Health Wisdom Cell</Link>
                </button>
              </div>
            }
          >
            <TreeNode
              label={
                <div className="text-center p-2">
                  <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                    <Link href="/cells/sports">Sports Cell</Link>
                  </button>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                      <Link href="/cells/spritual">Spritual Cell</Link>
                    </button>
                  </div>
                }
              >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                      <Link href="/cells/grievance">Grievance Redressal Cell</Link>
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
                <Link href="/advisory">Advisory Committee</Link>
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