import React, {FC, useEffect} from 'react';
import {Layout, theme} from "antd";
import {useTypedSelector} from "../hooks/redux";
import {ViewportNames} from "../store/reducers/config";
import {useActions} from "../hooks/useActions";

const {Content} = Layout

const Main: FC = () => {
    const {viewport} = useTypedSelector(state => state.configReducer)
    const {
        token: { colorBgContainer }
    } = theme.useToken()

    const {fetchMain} = useActions()

    useEffect(() => {
        fetchMain()
    }, [])

    return (
        <Content style={{padding: '0 50px',
            paddingTop: '50px'
        }}>
            <div
                className={viewport !== ViewportNames.LARGE ? "site-layout-content-small" : "site-layout-content-large"}
                 style={{ background: colorBgContainer }}
            >
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A molestias nihil quo quod sit
                    voluptatum! Accusamus accusantium aliquam, autem dicta dolorem eligendi illo ipsum magni nostrum
                    odit quidem, veritatis voluptatibus.
                </div>
                <div>Assumenda at consequatur debitis doloribus earum et explicabo fugit harum hic incidunt iste maiores
                    molestiae necessitatibus neque perferendis quae quisquam reiciendis, reprehenderit repudiandae
                    sapiente tenetur, ullam vel voluptas? Impedit, numquam.
                </div>
                <div>Accusantium asperiores assumenda consequuntur dolor ex hic impedit inventore, modi non officia
                    perspiciatis quaerat reprehenderit sit tempora tempore? Delectus distinctio ducimus eligendi eum
                    excepturi ipsam molestiae molestias, qui quibusdam quidem?
                </div>
                <div>Accusantium aperiam commodi cumque, dicta ducimus harum illo incidunt ipsum itaque magnam maiores
                    molestias mollitia necessitatibus, nemo nisi nulla perferendis quisquam quod repellat repudiandae
                    sed sunt temporibus ullam ut voluptate!
                </div>
                <div>A aliquid amet corporis doloremque ducimus eligendi expedita fuga hic nihil quaerat sapiente
                    similique, ut? Atque doloremque est eveniet facere iste laborum, libero neque nobis, optio
                    recusandae sed, unde voluptates?
                </div>
                <div>Ad consequuntur hic labore non provident quod, repellat reprehenderit sit unde vel, voluptates
                    voluptatum! Ab culpa debitis fugiat labore magni minima, molestias nisi omnis possimus quaerat saepe
                    sed ut voluptatem.
                </div>
                <div>Amet atque ea eos excepturi expedita fuga id impedit ipsum iusto laboriosam maxime mollitia,
                    nesciunt numquam pariatur porro provident quae quaerat reiciendis reprehenderit repudiandae, sequi
                    soluta, suscipit tempore voluptas voluptatibus!
                </div>
                <div>Aliquam at aut commodi cum cumque deleniti dolore eligendi explicabo, fugiat labore laboriosam
                    magni, maiores minus molestiae nostrum, odio omnis optio quae qui ratione soluta velit veniam
                    veritatis voluptate voluptatum!
                </div>
                <div>Adipisci architecto, deleniti dolorem doloremque earum fuga, magni minus nam odio omnis placeat
                    possimus praesentium quaerat quasi quibusdam quisquam reiciendis rem sed totam voluptates. Autem
                    doloribus maiores molestiae pariatur velit.
                </div>
                <div>Animi asperiores doloremque iste neque officiis. Architecto, ex explicabo hic magnam molestiae nam
                    necessitatibus quibusdam repudiandae saepe velit? A, ab alias fugiat iusto labore pariatur suscipit
                    voluptates? Dolor, illum, neque.
                </div>
            </div>
        </Content>
    );
};

export default Main;