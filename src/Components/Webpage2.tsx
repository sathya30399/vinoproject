import React from 'react'
import style from"./Webpage.module.css"
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image4.png"
import image4 from "../assets/image5.png"
import image5 from "../assets/image3.png"

const Webpage2 = () => {
  return (<>
  <div className={style.section}>
    <div className={style.section_content}>
        <div className={style.section_content_menu}>
            <div className={style.section_content_anchortag}><a>Home<RiArrowRightDoubleFill  className={style.anchortag_icon}/></a></div>
            <div className={style.section_content_anchortag}><a>Services <RiArrowRightDoubleFill className={style.anchortag_icon} /></a></div>
            <div className={style.section_content_anchortag} ><a className={style.third_anchortag}>Mens Salon in Los Angels</a></div>
        </div>
        <div className={style.section_content_flex_container}>
            <div className={style.section_content_flexc_aside}>
               <div className={style.section_content_flexc_subc} >
                <div className={style.filter}><p>FILTERS</p></div>
                <div className={style.clear}><p> CLEAR</p></div>
               </div>
               <div className={style.filter_locality}>
                <h3>Locality</h3>
                <h4>Other Popular Areas</h4>
                <div className={style.filter_locality_flex}>
                  <div className={style.filter_locality_flex_sub}>
                    <input type="checkbox" />
                    <span>California</span>
                  </div>
                  <div className={style.filter_locality_flex_sub}>
                    <input type="checkbox" />
                    <span>Bakersfield</span>
                  </div>
                  <div className={style.filter_locality_flex_sub}>
                    <input type="checkbox" />
                    <span>Glendale</span>
                  </div>
                  <div className={style.filter_locality_flex_sub}>
                    <input type="checkbox" />
                    <span>Riverside</span>
                  </div>
                  <div className={style.filter_locality_flex_sub}>
                    <input type="checkbox" />
                    <span>Santa Ana</span>
                  </div>
                </div>
                <h3>Price</h3>
                <div className={style.filter_price_flex}>
                  <div className={style.filter_price_flex_sub}>
                    <input type="checkbox" />
                    <span>$1399-$4000<span className={style.filter_price_flex_sub_secspan}>(205)</span></span>
                  </div>
                  <div className={style.filter_price_flex_sub}>
                    <input type="checkbox" />
                    <span>$1399-$4000<span className={style.filter_price_flex_sub_secspan}>(205)</span></span>
                  </div>
                  <div className={style.filter_price_flex_sub}>
                    <input type="checkbox" />
                    <span>$1399-$4000<span className={style.filter_price_flex_sub_secspan}>(205)</span></span>
                  </div>
                  <div className={style.filter_price_flex_sub}>
                    <input type="checkbox" />
                    <span>$1399-$4000<span className={style.filter_price_flex_sub_secspan}>(205)</span></span>
                  </div>
                  <div className={style.filter_price_flex_sub}>
                    <input type="checkbox" />
                    <span>$1399-$4000<span className={style.filter_price_flex_sub_secspan}>(205)</span></span>
                  </div>
                </div>
               
               <h3>User Rating</h3>
                <div className={style.filter_user_flex}>
                  <div className={style.filter_user_flex_sub}>
                    <input type="checkbox" />
                    <span>4.5&above (Excellent)<span className={style.filter_user_flex_sub_secspan}>(205)</span></span>
                  </div>
                  <div className={style.filter_price_flex_sub}>
                    <input type="checkbox" />
                    <span>4 &above (Very Good)<span className={style.filter_user_flex_sub_secspan}>(205)</span></span>
                  </div>
                  <div className={style.filter_price_flex_sub}>
                    <input type="checkbox" />
                    <span>3 &above (Good)<span className={style.filter_user_flex_sub_thirdspan}>(205)</span></span>
                  </div>
                </div>
              </div>

               
            </div>
            <div className={style.section_content_flexc_card}>
                <h1 className={style.flexc_card_h1}>Mens Salon in Los Angels(362)</h1>
                <p className={style.flexc_card_para}>Sort By:Top Reviews <FaAngleDown  className={style.flexc_card_para_icon}/><p className={style.flexc_card_para_inpara}>Showing 137 out of total 1058 Salon in Los Angels </p></p>
                <div className={style.flexc_card_flexc}>
                  <div className={style.flexc_card_flexc_img}>
                      <img src={image1} alt="" />
                  </div>
                  <div className={style.flexc_card_flexc_content}>
                      <h2>The BB Salon - Beyond Beauty</h2>
                      <h3>3205 Glendale Blvd ,Los Angels, CA 90039,United States</h3>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut}>HAIRCUT MALE</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut} >HAIRCUT BOY</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut}> HAIRCUT UNDERGRADUATE MALE</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className={style.flexc_card_flexc}>
                  <div className={style.flexc_card_flexc_img}>
                      <img src={image2} alt="" />
                  </div>
                  <div className={style.flexc_card_flexc_content}>
                      <h2>The BB Salon - Beyond Beauty</h2>
                      <h3>3205 Glendale Blvd ,Los Angels, CA 90039,United States</h3>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut}>HAIRCUT MALE</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut} >HAIRCUT BOY</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut}> HAIRCUT UNDERGRADUATE MALE</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className={style.flexc_card_flexc}>
                  <div className={style.flexc_card_flexc_img}>
                      <img src={image1} alt="" />
                  </div>
                  <div className={style.flexc_card_flexc_content}>
                      <h2>The BB Salon - Beyond Beauty</h2>
                      <h3>3205 Glendale Blvd ,Los Angels, CA 90039,United States</h3>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut}>HAIRCUT MALE</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut} >HAIRCUT BOY</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut}> HAIRCUT UNDERGRADUATE MALE</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className={style.flexc_card_flexc}>
                  <div className={style.flexc_card_flexc_img}>
                      <img src={image3} alt="" />
                  </div>
                  <div className={style.flexc_card_flexc_content}>
                      <h2>The BB Salon - Beyond Beauty</h2>
                      <h3>3205 Glendale Blvd ,Los Angels, CA 90039,United States</h3>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut}>HAIRCUT MALE</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut} >HAIRCUT BOY</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut}> HAIRCUT UNDERGRADUATE MALE</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className={style.flexc_card_flexc}>
                  <div className={style.flexc_card_flexc_img}>
                      <img src={image1} alt="" />
                  </div>
                  <div className={style.flexc_card_flexc_content}>
                      <h2>The BB Salon - Beyond Beauty</h2>
                      <h3>3205 Glendale Blvd ,Los Angels, CA 90039,United States</h3>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut}>HAIRCUT MALE</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut} >HAIRCUT BOY</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut}> HAIRCUT UNDERGRADUATE MALE</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className={style.flexc_card_flexc}>
                  <div className={style.flexc_card_flexc_img}>
                      <img src={image4} alt="" />
                  </div>
                  <div className={style.flexc_card_flexc_content}>
                      <h2>The BB Salon - Beyond Beauty</h2>
                      <h3>3205 Glendale Blvd ,Los Angels, CA 90039,United States</h3>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut}>HAIRCUT MALE</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut} >HAIRCUT BOY</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut}> HAIRCUT UNDERGRADUATE MALE</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className={style.flexc_card_flexc}>
                  <div className={style.flexc_card_flexc_img}>
                      <img src={image1} alt="" />
                  </div>
                  <div className={style.flexc_card_flexc_content}>
                      <h2>The BB Salon - Beyond Beauty</h2>
                      <h3>3205 Glendale Blvd ,Los Angels, CA 90039,United States</h3>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut}>HAIRCUT MALE</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut} >HAIRCUT BOY</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut}> HAIRCUT UNDERGRADUATE MALE</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className={style.flexc_card_flexc}>
                  <div className={style.flexc_card_flexc_img}>
                      <img src={image5} alt="" />
                  </div>
                  <div className={style.flexc_card_flexc_content}>
                      <h2>The BB Salon - Beyond Beauty</h2>
                      <h3>3205 Glendale Blvd ,Los Angels, CA 90039,United States</h3>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut}>HAIRCUT MALE</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut} >HAIRCUT BOY</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut}> HAIRCUT UNDERGRADUATE MALE</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className={style.flexc_card_flexc}>
                  <div className={style.flexc_card_flexc_img}>
                      <img src={image1} alt="" />
                  </div>
                  <div className={style.flexc_card_flexc_content}>
                      <h2>The BB Salon - Beyond Beauty</h2>
                      <h3>3205 Glendale Blvd ,Los Angels, CA 90039,United States</h3>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut}>HAIRCUT MALE</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut} >HAIRCUT BOY</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut}> HAIRCUT UNDERGRADUATE MALE</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className={style.flexc_card_flexc}>
                  <div className={style.flexc_card_flexc_img}>
                      <img src={image3} alt="" />
                  </div>
                  <div className={style.flexc_card_flexc_content}>
                      <h2>The BB Salon - Beyond Beauty</h2>
                      <h3>3205 Glendale Blvd ,Los Angels, CA 90039,United States</h3>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut}>HAIRCUT MALE</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut} >HAIRCUT BOY</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                      <div className={style.flexc_card_flexc_sub}>
                        <div className={style.flexc_card_flexc_sub_haircut}> HAIRCUT UNDERGRADUATE MALE</div>
                        <div className={style.flexc_card_flexc_sub_c}>
                          <div>$380.00 <span>45mins</span></div>
                          <div className={style.flexc_card_flexc_sub_c_a}><a href="">Book</a></div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className={style.flexc_card_flexc_finaldiv}>
                  <a href="">1</a>
                  <a href="">2</a>
                  <a href="">3</a>
                  <a href="">4</a>
                  <a href="">5</a>
                  <a href="">6</a>
                  <span>...</span>
                  <a href="">32</a>
                </div>
                
            </div>
        </div>
        <div className={style.section_content_explore}>
          <h1>Explore other options for you here</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro possimus dolorem voluptatibus illo nesciunt, sunt sapiente aperiam inventore quam delectus tempore totam similique praesentium repudiandae at perspiciatis tempora! Eligendi harum obcaecati nostrum repudiandae maiores praesentium optio voluptatum adipisci inventore sequi. Voluptatem explicabo eaque consequuntur ipsa repellendus natus iusto, debitis minus voluptas? Non rem sapiente vitae quam vero. Qui fugiat animi earum odit quas perspiciatis praesentium ut eaque perferendis nulla saepe maiores, quis facere excepturi exercitationem, est deleniti incidunt dolor commodi vero. Pariatur deleniti exercitationem sit explicabo facere iusto debitis! Quae illum deserunt eaque deleniti velit praesentium vitae voluptates sapiente placeat?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat voluptatum maiores unde molestias, inventore laudantium a corporis quam provident laboriosam eaque minima adipisci vero alias nobis quas quis possimus vel, nam molestiae non itaque voluptas! Pariatur nostrum blanditiis laborum illum assumenda? Cupiditate maxime cumque vero illo at temporibus, vitae nemo ratione distinctio culpa eum odit, perspiciatis sit aperiam quae dolores ipsa repellendus ut, voluptate nostrum? Culpa necessitatibus accusantium blanditiis corrupti obcaecati. Facilis iusto laboriosam provident, mollitia corporis reiciendis fugiat?</p>

        </div>
        <div className={style.section_content_popular}>
          <h1>Popular salons near me</h1>
          <div className={style.section_content_popular_li}>
            <div>
              <ul>
                <li>mens salon near me</li>
                <li>mens salon near me</li>
                <li>mens salon near me</li>
                <li>mens salon near me</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Womens salon near me</li>
                <li>Womens salon near me</li>
                <li>Womens salon near me</li>
                <li>Womens salon near me</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Boys salon near me</li>
                <li>Boys salon near me</li>
                <li>Boys salon near me</li>
                <li>Boys salon near me</li>
              </ul>
            </div>
            <div> 
              <ul>
                <li>Boys art near me</li>
                <li>Boys art near me</li>
                <li>Boys art near me</li>
                <li>Boys art near me</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Womens salon near me</li>
                <li>Womens salon near me</li>
                <li>Womens salon near me</li>
                <li>Womens salon near me</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Boys salon near me</li>
                <li>Boys salon near me</li>
                <li>Boys salon near me</li>
                <li>Boys salon near me</li>
              </ul>
            </div>
          </div>
          
        </div>
    </div>

  </div>
  </>
    
  )
}

export default Webpage2