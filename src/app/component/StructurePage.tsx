import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import "tailwindcss/tailwind.css";

const StructurePage = () => (
  <div className="flex justify-center p-4">
    <div className="text-white font-semibold text-sm overflow-x-auto">
      <Tree
        lineWidth={"2px"}
        lineColor={"green"}
        lineBorderRadius={"10px"}
        label={
          <div className="text-center p-2">
            <button className="bg-primary p-2 rounded-lg">
              Director
              <br />
              Department of Holistic Education
            </button>
          </div>
        }
      >


        <TreeNode
          label={
            <div className="text-center p-2">
              <button className="bg-primary p-2 rounded-lg">
                Working Committee
              </button>
            </div>
          }
        ></TreeNode>


        <TreeNode
          label={
            <div className="text-center p-2">
              <button className="bg-primary p-2 rounded-lg">Cells</button>
            </div>
          }
        >

          <TreeNode
            label={
              <div className="text-center p-2">
                <button className="bg-primary p-2 rounded-lg">IT Cell</button>
              </div>
            }
          >
            <TreeNode
              label={
                <div className="text-center p-2">
                  <button className="bg-primary p-2 rounded-lg">
                    Event Management Cell
                  </button>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <button className="bg-primary p-2 rounded-lg">
                      Super 100 Cell
                    </button>
                  </div>
                }
              />
            
            </TreeNode>
          </TreeNode>
          <TreeNode
            label={
              <div className="text-center p-2">
                <button className="bg-primary p-2 rounded-lg">IPR Cell</button>
              </div>
            }
          >
            <TreeNode
              label={
                <div className="text-center p-2">
                  <button className="bg-primary p-2 rounded-lg">
                    Industry Coordination Cell
                  </button>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <button className="bg-primary p-2 rounded-lg">
                      HEI Coordination Cell
                    </button>
                  </div>
                }
              />
            </TreeNode>
          </TreeNode>
          <TreeNode
            label={
              <div className="text-center p-2">
                <button className="bg-primary p-2 rounded-lg">
                  E Commerce Cell
                </button>
              </div>
            }
          >
            <TreeNode
              label={
                <div className="text-center p-2">
                  <button className="bg-primary p-2 rounded-lg">
                    TMS Cell
                  </button>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <button className="bg-primary p-2 rounded-lg">
                      Udyam Cell
                    </button>
                  </div>
                }
              />
            </TreeNode>
          </TreeNode>
          <TreeNode
            label={
              <div className="text-center p-2">
                <button className="bg-primary p-2 rounded-lg">
                  Foreign Language Cell
                </button>
              </div>
            }
          >
            <TreeNode
              label={
                <div className="text-center p-2">
                  <button className="bg-primary p-2 rounded-lg">
                    Olympiad Cell
                  </button>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <button className="bg-primary p-2 rounded-lg">
                      LMS Cell
                    </button>
                  </div>
                }
              />
            </TreeNode>
          </TreeNode>
          <TreeNode
            label={
              <div className="text-center p-2">
                <button className="bg-primary p-2 rounded-lg">CSR Cell</button>
              </div>
            }
          >
            <TreeNode
              label={
                <div className="text-center p-2">
                  <button className="bg-primary p-2 rounded-lg">
                    R and D Cell
                  </button>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <button className="bg-primary p-2 rounded-lg">
                      Art Cell
                    </button>
                  </div>
                }
              />
            </TreeNode>
          </TreeNode>
          <TreeNode
            label={
              <div className="text-center p-2">
                <button className="bg-primary p-2 rounded-lg">ATL Cell</button>
              </div>
            }
          >
            <TreeNode
              label={
                <div className="text-center p-2">
                  <button className="bg-primary p-2 rounded-lg">
                    Publications and Promotions Cell
                  </button>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <button className="bg-primary p-2 rounded-lg">
                      Environment Cell
                    </button>
                  </div>
                }
              />
            </TreeNode>
          </TreeNode>
          <TreeNode
            label={
              <div className="text-center p-2">
                <button className="bg-primary p-2 rounded-lg">
                  Parenting Cell
                </button>
              </div>
            }
          >
            <TreeNode
              label={
                <div className="text-center p-2">
                  <button className="bg-primary p-2 rounded-lg">
                    Astrology Cell
                  </button>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <button className="bg-primary p-2 rounded-lg">
                      Premium School Cell
                    </button>
                  </div>
                }
              />
            </TreeNode>
          </TreeNode>


          <TreeNode
            label={
              <div className="text-center p-2">
                <button className="bg-primary p-2 rounded-lg">
                  Health Wisdom Cell
                </button>
              </div>
            }
          >
            <TreeNode
              label={
                <div className="text-center p-2">
                  <button className="bg-primary p-2 rounded-lg">
                    Sports Cell
                  </button>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <button className="bg-primary p-2 rounded-lg">
                      Spritual Cell
                    </button>
                  </div>
                }
              >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <button className="bg-primary p-2 rounded-lg">
                      Grievance Redressal Cell
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
              <button className="bg-primary p-2 rounded-lg">
                Advisory Committee
              </button>
            </div>
          }
        ></TreeNode>
      </Tree>
    </div>
  </div>
);

export default StructurePage;
