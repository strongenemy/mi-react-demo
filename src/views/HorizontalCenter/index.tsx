import React from "react"
import './index.scss'
import Grid from "@hi-ui/grid"
import Collapse from "@hi-ui/collapse"
import Tag from "@hi-ui/tag"

const HorizontalCenter = () => {
  const { Row, Col } = Grid
    return (
      <div>
        <div className="title">
          <div>实现一个元素相对于父容器的水平垂直居中对齐</div>
          <div>(标题文字水平垂直居中)</div>
        </div>
        <div className="mainContent">
          <Row gutter={true}>
          <Col span={8}>
            <div className="wayTitle">方式1：position（子绝父相）</div>
            <div className="wayContent">
              <div className="father way1father">
                <div className="son way1son"></div>
              </div>
            </div>
            <div className="wayInfo">
              <Collapse defaultActiveId={["0" , "1", "2"]} arrowPlacement="left">
              <Collapse.Panel title="原理" id="0">
                  <div className="info">利用css定位规则，设置左右、上下方向定位为0，margin为auto，让css根据定位计算margin值，用hack的方式实现居中。</div>
                </Collapse.Panel>
                <Collapse.Panel title="优点" id="1">
                  <div className="info">绝大多数浏览器均可使用，且不拘泥于居中对齐。</div>
                </Collapse.Panel>
                <Collapse.Panel title={<div className="disTitle"><span>缺点</span><Tag type="primary">需要固定宽高</Tag></div>} id="2">
                  <div className="info">
                  需要固定宽高
                  居中块的尺寸需要可控，因为css计算margin时也需要参考尺寸值，由于四周为0，所以自动计算的尺寸是与父容器一样的。
                  如果设置了浮动，则自动居中就会失效
                  </div>
                </Collapse.Panel>
              </Collapse>
            </div>
          </Col>
          <Col span={8}>
            <div className="wayTitle">方式2：绝对定位+margin反向偏移</div>
            <div className="wayContent">
              <div className="father way2father">
                <div className="son way2son"></div>
              </div>
            </div>
            <div className="wayInfo">
            <Collapse defaultActiveId={["0" , "1", "2"]} arrowPlacement="left">
              <Collapse.Panel title="原理" id="0">
                  <div className="info">top、left偏移了父对象的50%高度宽度，利用margin反向偏移居中块的50%宽高</div>
                </Collapse.Panel>
                <Collapse.Panel title="优点" id="1">
                  <div className="info"></div>
                </Collapse.Panel>
                <Collapse.Panel title={<div className="disTitle"><span>缺点</span><Tag type="primary">需要知道具体的元素宽高值</Tag></div>} id="2">
                  <div className="info">
                    margin中不能使用百分比，因为百分比是针对父对象的，所以需要知道具体的元素宽高值，以此来计算margin反向偏向值
                    position: absolute;
                    width: xxx;
                    height: xxx;
                    top: calc(50% - xxx/2);
                    left: calc(50% - xxx/2)
                  </div>
                </Collapse.Panel>
              </Collapse>
            </div>
          </Col>
          <Col span={8}>
            <div className="wayTitle">方式3：绝对定位+transform反向偏移</div>
            <div className="wayContent">
              <div className="father way3father">
                <div className="son way3son"></div>
              </div>
            </div>
            <div className="wayInfo">
              <Collapse defaultActiveId={["0" , "1", "2"]} arrowPlacement="left">
              <Collapse.Panel title="原理" id="0">
                  <div className="info">原理同上一个，不同点是使用了transform来代替margin做反向偏移</div>
                </Collapse.Panel>
                <Collapse.Panel title="优点" id="1">
                  <div className="info">无需手动计算由于transform的计算基准是元素本身，所以这里可以用50%来做反向偏移。</div>
                </Collapse.Panel>
                <Collapse.Panel title={<div className="disTitle"><span>缺点</span><Tag type="primary">不需要知道元素的宽高</Tag></div>} id="2">
                  <div className="info">也需要固定子类尺寸值，浏览器以此为基准来计算定位。</div>
                </Collapse.Panel>
              </Collapse>
            </div>
          </Col>
          </Row>

          <Row gutter={true}>
          <Col span={8}>
            <div className="wayTitle">方式4：display：tabel</div>
            <div className="wayContent">
              <div className="father way4father">
                <div className="subway4son">
                  <div className="son way4son"></div>
                </div>
              </div>
            </div>
            <div className="wayInfo">
              <Collapse defaultActiveId={["0" , "1", "2"]} arrowPlacement="left">
              <Collapse.Panel title="原理" id="0">
                  <div className="info">利用table-cell的属性</div>
                </Collapse.Panel>
                <Collapse.Panel title="优点" id="1">
                  <div className="info">该方案实现效果比较好，居中块可以设置 max-height、max-width，而且居中块是可以具有垂直方向的包裹性的。</div>
                </Collapse.Panel>
                <Collapse.Panel title={<div className="disTitle"><span>缺点</span><Tag type="primary">增加table-cell层</Tag></div>} id="2">
                  <div className="info">增加了一层table-cell层来实现垂直居中，水平方向由于是在table-cell里面的。</div>
                </Collapse.Panel>
              </Collapse>
            </div>
          </Col>

          <Col span={8}>
            <div className="wayTitle">方式5：display: inline-block</div>
            <div className="wayContent">
              <div className="father way5father">
                <div className="son way5son"></div>
              </div>
            </div>
            <div className="wayInfo">
              <Collapse defaultActiveId={["0" , "1", "2"]} arrowPlacement="left">
              <Collapse.Panel title="原理" id="0">
                  <div className="info">利用inline-block的vertical-align: middle去对齐after伪元素</div>
                </Collapse.Panel>
                <Collapse.Panel title="优点" id="1">
                  <div className="info">该方案实现效果更加好，居中块的尺寸可以做包裹性、自适应内容，兼容性也相当好。</div>
                </Collapse.Panel>
                <Collapse.Panel title={<div className="disTitle"><span>缺点</span><Tag type="primary">极少使用</Tag></div>} id="2">
                  <div className="info">水平居中需要考虑inline-block间隔中的留白（代码换行符遗留问题。）</div>
                </Collapse.Panel>
              </Collapse>
            </div>
          </Col>

          <Col span={8}>
            <div className="wayTitle">方式6：display: flex-box</div>
            <div className="wayContent">
              <div className="father way6father">
                <div className="son way6son"></div>
              </div>
            </div>
            <div className="wayInfo">
              <Collapse defaultActiveId={["0" , "1", "2"]} arrowPlacement="left">
              <Collapse.Panel title="原理" id="0">
                  <div className="info"> flexbox布局。</div>
                </Collapse.Panel>
                <Collapse.Panel title="优点" id="1">
                  <div className="info">能解决各种排列布局问题。</div>
                </Collapse.Panel>
                <Collapse.Panel title={<div className="disTitle"><span>缺点</span><Tag type="primary">常用</Tag></div>} id="2">
                  <div className="info">某些旧浏览器支持度不高。</div>
                </Collapse.Panel>
              </Collapse>
            </div>
          </Col>
          </Row>
        </div>
      </div>
    )
  }
  export default HorizontalCenter