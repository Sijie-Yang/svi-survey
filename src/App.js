import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { DataStore } from '@aws-amplify/datastore';
import { SurveyResult } from './models';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { themeJson } from "./theme";
Amplify.configure(awsconfig);

const imageUrls = [
  '﻿https://i.ibb.co/SxSZxzG/7-103-691401158166-1-33638822684768.jpg',
  'https://i.ibb.co/Bgwy0V5/17-103-965982384617-1-33718484254059.jpg',
  'https://i.ibb.co/7KWn6gd/249-103-834942130443-1-44842362369704.jpg',
  'https://i.ibb.co/JzrSMYb/348-103-882669552433-1-34834058181907.jpg',
  'https://i.ibb.co/tH25F6V/376-103-737989877242-1-32207769851196.jpg',
  'https://i.ibb.co/Jsh0487/410-103-830666219077-1-41649144503013.jpg',
  'https://i.ibb.co/VHPPKDy/641-103-841635208299-1-39150661603165.jpg',
  'https://i.ibb.co/zPCn7tm/761-103-722414526978-1-38350437995725.jpg',
  'https://i.ibb.co/2SmKG36/799-103-635244406634-1-32671308660574.jpg',
  'https://i.ibb.co/27Gj0vg/1169-103-947519225051-1-35667191963618.jpg',
  'https://i.ibb.co/6ZDVtk0/1669-103-844954259738-1-43858832493154.jpg',
  'https://i.ibb.co/d2ck5FQ/1791-103-83931346578-1-43423125373499.jpg',
  'https://i.ibb.co/RQzJQQH/1957-103-63244556433-1-32337975029413.jpg',
  'https://i.ibb.co/cCT7d00/2338-103-811492304679-1-44314613509588.jpg',
  'https://i.ibb.co/0X2q3f2/3470-103-834123176515-1-41352274522579.jpg',
  'https://i.ibb.co/VjzJfPs/3503-103-849310346992-1-27479938276955.jpg',
  'https://i.ibb.co/2hTgHrT/3651-103-750380937671-1-37459159447096.jpg',
  'https://i.ibb.co/86y91g5/3658-103-750097812835-1-37582762919653.jpg',
  'https://i.ibb.co/17m2yp0/3713-103-838194851186-1-28611405866513.jpg',
  'https://i.ibb.co/vdy7NmY/3769-103-90513220357-1-41056576932427.jpg',
  'https://i.ibb.co/cvVh3mv/3954-103-774262951504-1-31369718719351.jpg',
  'https://i.ibb.co/6YbPyG9/3967-103-822164720323-1-3045106513672.jpg',
  'https://i.ibb.co/zPkt2BS/4351-103-73613853048-1-33492756475646.jpg',
  'https://i.ibb.co/Ykxbzb3/4517-103-835458665363-1-34130878261702.jpg',
  'https://i.ibb.co/nw6LnJk/4520-103-722825809719-1-32232085473513.jpg',
  'https://i.ibb.co/RyvTsFp/4755-103-832155889104-1-29421328672251.jpg',
  'https://i.ibb.co/MhyPQWj/4919-103-880612861431-1-31684564916755.jpg',
  'https://i.ibb.co/jvm4TfW/4973-103-875856549526-1-37726533469775.jpg',
  'https://i.ibb.co/pWSHw1M/5177-103-774456983334-1-43841889707753.jpg',
  'https://i.ibb.co/7zpwstp/5340-103-755906085903-1-34782697205514.jpg',
  'https://i.ibb.co/DLDYMZ4/5579-103-826763574094-1-24827892929915.jpg',
  'https://i.ibb.co/Tm2KxQf/5824-103-964046587949-1-34535387497435.jpg',
  'https://i.ibb.co/thsqL59/5890-103-923391521569-1-33170633586357.jpg',
  'https://i.ibb.co/0mxrMbp/6193-103-85051738261-1-3314377938912.jpg',
  'https://i.ibb.co/GxsdY7W/6522-103-917315471364-1-39507412825381.jpg',
  'https://i.ibb.co/NNpspQx/6745-103-79581542161-1-27045146672818.jpg',
  'https://i.ibb.co/y4wyykG/6820-103-873063734264-1-34156745410943.jpg',
  'https://i.ibb.co/rHYXtGL/6913-103-894905755457-1-35714423998725.jpg',
  'https://i.ibb.co/mygpnct/6954-103-833452485332-1-36355024953854.jpg',
  'https://i.ibb.co/WV1wLNv/7264-103-825171299835-1-29077450229903.jpg',
  'https://i.ibb.co/gvcS5Nd/7322-103-839535655503-1-37557933665143.jpg',
  'https://i.ibb.co/4PFkGvx/7999-103-936429990576-1-36558853818052.jpg',
  'https://i.ibb.co/Nx1ycNv/8181-103-922359940577-1-31428110192427.jpg',
  'https://i.ibb.co/Lk6Rj7V/8197-103-87150695535-1-34579343688166.jpg',
  'https://i.ibb.co/SfscFC3/8261-103-829828416714-1-37168684290203.jpg',
  'https://i.ibb.co/HVf7khH/8285-103-850795283698-1-278699662077.jpg',
  'https://i.ibb.co/wSrbwM7/8434-103-863206801838-1-36391318780607.jpg',
  'https://i.ibb.co/8c6H5xR/8796-103-84625823446-1-28149057300624.jpg',
  'https://i.ibb.co/BKYztsX/8931-103-850735604781-1-2748879249223.jpg',
  'https://i.ibb.co/K98NjJQ/8962-103-889147665892-1-36532109307541.jpg',
  'https://i.ibb.co/bNbSk6W/9003-103-952126157832-1-31991414977495.jpg',
  'https://i.ibb.co/ph9M3Dx/9119-103-934135589383-1-35854769757845.jpg',
  'https://i.ibb.co/fSL1Yqk/9148-103-84882096149-1-33275393482786.jpg',
  'https://i.ibb.co/1KHvQmM/9528-103-886386509018-1-38093761148211.jpg',
  'https://i.ibb.co/qgkZxJY/9765-103-886576258235-1-29903614245874.jpg',
  'https://i.ibb.co/RSkzxCk/9834-103-915167524161-1-40508193167389.jpg',
  'https://i.ibb.co/f2pHPJg/10188-103-828278905746-1-44319655784859.jpg',
  'https://i.ibb.co/xDZb7zG/10396-103-687376020797-1-32301216979197.jpg',
  'https://i.ibb.co/cNfJzD2/10480-103-758699183904-1-31736295161644.jpg',
  'https://i.ibb.co/2sMQ2qJ/10588-103-97534255475-1-37690724605747.jpg',
  'https://i.ibb.co/Byy3h0D/11139-103-789736849123-1-28075411321543.jpg',
  'https://i.ibb.co/mbXJqF8/11485-103-88617259338-1-39464939975589.jpg',
  'https://i.ibb.co/B2fzRTM/11671-103-926255336454-1-361667093876.jpg',
  'https://i.ibb.co/BP6M6jn/11678-103-929033696236-1-36726328070099.jpg',
  'https://i.ibb.co/JvqGHty/11721-103-771499807474-1-42140670202835.jpg',
  'https://i.ibb.co/KNDfdPR/11929-103-900516733293-1-41738818511313.jpg',
  'https://i.ibb.co/wBphYKd/12189-103-844021119514-1-31653087480304.jpg',
  'https://i.ibb.co/kXbGBfs/12195-103-623875394965-1-26715735406323.jpg',
  'https://i.ibb.co/9rYwHRJ/12449-103-746206371739-1-32588783843228.jpg',
  'https://i.ibb.co/5k0B9hQ/12575-103-851037624618-1-31487053077719.jpg',
  'https://i.ibb.co/4TD57w5/12935-103-724500844997-1-37844615298932.jpg',
  'https://i.ibb.co/3h4QpCJ/12944-103-826037955869-1-31568727182717.jpg',
  'https://i.ibb.co/ZXm5pCf/13224-103-776066483423-1-30166875490602.jpg',
  'https://i.ibb.co/xjkVpz6/13413-103-671752829919-1-31505061700743.jpg',
  'https://i.ibb.co/PtT5p9C/13622-103-902555433244-1-37472455010882.jpg',
  'https://i.ibb.co/S0pkCpL/13643-103-832310938533-1-37473028396392.jpg',
  'https://i.ibb.co/5jW4cJJ/13761-103-918381174231-1-31785778873747.jpg',
  'https://i.ibb.co/jyKZf29/13843-103-799841428701-1-45044388994138.jpg',
  'https://i.ibb.co/LdvcgHH/14097-103-761980799058-1-42958307115587.jpg',
  'https://i.ibb.co/6D3m8S6/14326-103-932084947158-1-31050963161264.jpg',
  'https://i.ibb.co/vYYpSRb/14502-103-882053798842-1-32117850116705.jpg',
  'https://i.ibb.co/FKdD5G5/14565-103-717331701853-1-34346863765127.jpg',
  'https://i.ibb.co/sWgPynd/14738-103-882838566224-1-33860520779362.jpg',
  'https://i.ibb.co/z45zNPL/14748-103-772355906548-1-40795520849126.jpg',
  'https://i.ibb.co/ZdK4JwJ/15231-103-847555756896-1-37734387662324.jpg',
  'https://i.ibb.co/qJLMh2k/15432-103-954506765591-1-34803348731768.jpg',
  'https://i.ibb.co/ct7hV06/15596-103-862973391403-1-28854964227352.jpg',
  'https://i.ibb.co/X8b6pQG/16092-103-904898605608-1-33817446668867.jpg',
  'https://i.ibb.co/tDrkqWw/16431-103-665427689905-1-30688382151422.jpg',
  'https://i.ibb.co/fNrD3dZ/16558-103-90068937107-1-39834343568648.jpg',
  'https://i.ibb.co/pQX7KLd/16712-103-771024195719-1-28821070687855.jpg',
  'https://i.ibb.co/5kbmrWt/17428-103-831672451377-1-28056289614888.jpg',
  'https://i.ibb.co/njKjSmR/17971-103-89221344847-1-38664418914478.jpg',
  'https://i.ibb.co/Pjb0gdH/18040-103-628289434981-1-29300891277833.jpg',
  'https://i.ibb.co/ZzP9Fhg/18170-103-693481164648-1-32264913744923.jpg',
  'https://i.ibb.co/WP9WdQw/19122-103-782998639573-1-4346224290313.jpg',
  'https://i.ibb.co/PjWMn7P/19256-103-915695607739-1-33197622176572.jpg',
  'https://i.ibb.co/tMbCPhq/19586-103-812797206404-1-280739949481.jpg',
  'https://i.ibb.co/ZTZHNc7/19900-103-721850724134-1-44909127224226.jpg',
  'https://i.ibb.co/5vhZgrH/19908-103-823980567315-1-27113627921361.jpg',
  'https://i.ibb.co/Yks43qL/20004-103-818460673636-1-3225004671725.jpg',
  'https://i.ibb.co/W5Cc5zX/20132-103-920339361154-1-40071975807108.jpg',
  'https://i.ibb.co/n87h3N0/20150-103-944313579632-1-33257548170052.jpg',
  'https://i.ibb.co/yRSW4HJ/20214-103-746826335942-1-37063810784742.jpg',
  'https://i.ibb.co/KVz6ryK/20289-103-766053124908-1-31935522786801.jpg',
  'https://i.ibb.co/BCc5wzX/20578-103-847529680785-1-31052752546835.jpg',
  'https://i.ibb.co/Bwwqqnh/20690-103-898131752038-1-40000079453525.jpg',
  'https://i.ibb.co/b7JVhtF/20751-103-766697607487-1-37761585088039.jpg',
  'https://i.ibb.co/HGx2Ycc/20887-103-694604579252-1-31801265050639.jpg',
  'https://i.ibb.co/PwbsSY8/20906-103-760018254156-1-38208647625405.jpg',
  'https://i.ibb.co/Xyx8FwT/20950-103-767873688401-1-3719231112243.jpg',
  'https://i.ibb.co/TwrzkFt/21030-103-73165981202-1-39064272039376.jpg',
  'https://i.ibb.co/JsTk0Fv/21271-103-836105070346-1-36778745424381.jpg',
  'https://i.ibb.co/wrbNJfH/21592-103-778869800221-1-33827872990912.jpg',
  'https://i.ibb.co/FY0w2HN/21704-103-704871433373-1-32781864396868.jpg',
  'https://i.ibb.co/VqbRDnd/22008-103-842826999482-1-27871014381244.jpg',
  'https://i.ibb.co/C9kNjS7/22168-103-762005164779-1-31420241621381.jpg',
  'https://i.ibb.co/Y81JkJZ/22434-103-926415826149-1-30926626800285.jpg',
  'https://i.ibb.co/pWx2FQS/22589-103-767410209669-1-35990597789132.jpg',
  'https://i.ibb.co/RBZXK58/22618-103-796318075113-1-34866859642562.jpg',
  'https://i.ibb.co/rkLV8s2/22758-103-679235704984-1-31254933504438.jpg',
  'https://i.ibb.co/KmRD44b/22770-103-935829830299-1-38193808956811.jpg',
  'https://i.ibb.co/Xb9m007/23090-103-676573812761-1-31474815301473.jpg',
  'https://i.ibb.co/09mQGnr/23217-103-699061536835-1-32646899942087.jpg',
  'https://i.ibb.co/YkSJyzq/23257-103-775686130212-1-43283078700622.jpg',
  'https://i.ibb.co/MSYbd6g/23269-103-621545566322-1-27801066667774.jpg',
  'https://i.ibb.co/h9XQTn1/23399-103-635787614948-1-27574651828276.jpg',
  'https://i.ibb.co/dWnybsX/23793-103-957484324609-1-36101163840394.jpg',
  'https://i.ibb.co/mFcXwTT/23913-103-828805009287-1-4347200946655.jpg',
  'https://i.ibb.co/M20cpY5/24004-103-95604296168-1-37215276251105.jpg',
  'https://i.ibb.co/7g418zH/24009-103-953265673751-1-36878466192811.jpg',
  'https://i.ibb.co/wQwC08R/24202-103-780825744725-1-28514090795563.jpg',
  'https://i.ibb.co/zmbXWqz/24283-103-700763196501-1-34897321760089.jpg',
  'https://i.ibb.co/GQxKbPk/24474-103-787784388867-1-29197886337375.jpg',
  'https://i.ibb.co/pJWBZt2/24559-103-738215188009-1-3092275875002.jpg',
  'https://i.ibb.co/zGSk7PJ/24651-103-721488018175-1-31055713276946.jpg',
  'https://i.ibb.co/mzmsQLf/24673-103-770474911121-1-33352195875235.jpg',
  'https://i.ibb.co/jZVPCgw/24764-103-772051502002-1-33843570302755.jpg',
  'https://i.ibb.co/Rz5PGdM/24915-103-776684860687-1-37632336820916.jpg',
  'https://i.ibb.co/GJYbWJC/25131-103-799895360311-1-41564210288546.jpg',
  'https://i.ibb.co/jVs2hyd/25194-103-861586168076-1-27119964518479.jpg',
  'https://i.ibb.co/xH6C0Xd/25408-103-825070075265-1-43520078016871.jpg',
  'https://i.ibb.co/J7SWFzn/25495-103-774027815029-1-30635942884765.jpg',
  'https://i.ibb.co/B4JL6d3/25959-103-945816629896-1-33314358675941.jpg',
  'https://i.ibb.co/wBjrp4t/26132-103-862099930339-1-39772142882315.jpg',
  'https://i.ibb.co/j3hXSgr/26366-103-816687442566-1-33260809851077.jpg',
  'https://i.ibb.co/h1g1Jg6/26411-103-790297402556-1-27686942783971.jpg',
  'https://i.ibb.co/NLFdHp4/26586-103-787577611219-1-29680082044668.jpg',
  'https://i.ibb.co/kQ7rKF3/26873-103-79787171458-1-30254247303092.jpg',
  'https://i.ibb.co/M6nH9pp/26880-104-009003553477-1-36830152356197.jpg',
  'https://i.ibb.co/hmh870J/27243-103-842992408371-1-27611918742931.jpg',
  'https://i.ibb.co/vkw49Jg/27516-103-962446265088-1-34744356008794.jpg',
  'https://i.ibb.co/BPfH6Zc/27660-103-869737759319-1-31002980644779.jpg',
  'https://i.ibb.co/FJGRcsd/27698-103-748294012938-1-34883407699474.jpg',
  'https://i.ibb.co/MMYf6x9/27827-103-827749564753-1-29500707134836.jpg',
  'https://i.ibb.co/mCsg1jT/27900-103-877627176088-1-29983134789213.jpg',
  'https://i.ibb.co/g40JjYb/27998-103-79290109424-1-30685523328475.jpg',
  'https://i.ibb.co/K6cyckF/28038-103-793897964238-1-33252333779561.jpg',
  'https://i.ibb.co/BN881NB/28040-103-812967260179-1-32137244011856.jpg',
  'https://i.ibb.co/pdq6sdy/28104-103-856182619326-1-40600319652283.jpg',
  'https://i.ibb.co/2MWjtn1/28166-103-883670016873-1-39631501551445.jpg',
  'https://i.ibb.co/8dV1vKH/28204-103-828853199276-1-41356507814794.jpg',
  'https://i.ibb.co/YcCzSW8/28989-103-775161508686-1-36474796461527.jpg',
  'https://i.ibb.co/dWh4kHr/29044-103-770952625253-1-44138310145607.jpg',
  'https://i.ibb.co/RDdvJ0d/29080-103-859235537294-1-28336139547828.jpg',
  'https://i.ibb.co/QnGFzWG/29238-103-787169648757-1-34448122231386.jpg',
  'https://i.ibb.co/rkZpPVR/29342-103-847215189467-1-35429477454857.jpg',
  'https://i.ibb.co/N2ZxxXC/30068-103-986267451174-1-3533353493822.jpg',
  'https://i.ibb.co/qJZYfLt/30515-103-903783890338-1-33326914323691.jpg',
  'https://i.ibb.co/7X5wrvx/30574-103-793500899072-1-34807390100077.jpg',
  'https://i.ibb.co/KwFcdpq/30695-103-73112907434-1-38149353199118.jpg',
  'https://i.ibb.co/xC2nk33/30724-103-856521367571-1-31750380184728.jpg',
  'https://i.ibb.co/bFN5v72/30732-103-861399016562-1-33656233782211.jpg',
  'https://i.ibb.co/7K7jTNV/31196-103-703239245479-1-35191145543549.jpg',
  'https://i.ibb.co/qYN97vZ/31309-103-864724048745-1-31970344017588.jpg',
  'https://i.ibb.co/QjchL5F/31464-103-902087254433-1-31954993348998.jpg',
  'https://i.ibb.co/LtMHH0S/31612-103-629186690372-1-31854844512916.jpg',
  'https://i.ibb.co/djFHNbZ/31796-103-865322661939-1-40424822507032.jpg',
  'https://i.ibb.co/gPZknNp/32167-103-979055595225-1-33524609607319.jpg',
  'https://i.ibb.co/Dw3XdwB/32658-103-864840254092-1-31604878109185.jpg',
  'https://i.ibb.co/k1NBZ4F/32908-103-808368191469-1-27349175628073.jpg',
  'https://i.ibb.co/dBsXz59/33123-103-834600275363-1-41221456549892.jpg',
  'https://i.ibb.co/6tdRFZk/33219-103-982995757267-1-39183416432564.jpg',
  'https://i.ibb.co/q1yJPbr/33565-103-948108807633-1-3262912911232.jpg',
  'https://i.ibb.co/rQjC4M2/33599-103-622013660796-1-28265110896975.jpg',
  'https://i.ibb.co/M5s3fsm/34118-103-860523829356-1-30366849073491.jpg',
  'https://i.ibb.co/BjkMR6n/34582-103-628447448137-1-27234982049116.jpg',
  'https://i.ibb.co/WDYsVsc/34756-103-834639457046-1-27593811015307.jpg',
  'https://i.ibb.co/p4PMH43/34762-103-874361476013-1-39453909356192.jpg',
  'https://i.ibb.co/fqjfzN0/34808-103-753342896065-1-39081192303954.jpg',
  'https://i.ibb.co/ky39CPH/34880-103-791124274904-1-30853494059708.jpg',
  'https://i.ibb.co/KX7QYmF/35079-103-940164416032-1-37123876234117.jpg',
  'https://i.ibb.co/vxhF45Q/35146-103-911564265579-1-41670120619033.jpg',
  'https://i.ibb.co/kcTDwY2/35345-103-724378678972-1-31739870646755.jpg',
  'https://i.ibb.co/3TfzG02/35616-103-816293534867-1-27707672386718.jpg',
  'https://i.ibb.co/cvTx3GC/35664-103-808030113004-1-27732899548668.jpg',
  'https://i.ibb.co/J7yLr09/35840-103-716552045433-1-34009842923476.jpg',
  'https://i.ibb.co/7W2kTDr/36709-103-741151384176-1-33391832424377.jpg',
  'https://i.ibb.co/8s1TWpM/36920-103-649456562486-1-32358481344771.jpg',
  'https://i.ibb.co/Y3gLbKD/37002-103-631122581859-1-31281869365648.jpg',
  'https://i.ibb.co/SXSnmQ2/37294-103-769215923953-1-39020049185026.jpg',
  'https://i.ibb.co/1qSzL6q/37317-103-752637427974-1-3931411474126.jpg',
  'https://i.ibb.co/6B8JkvQ/37570-103-827877173569-1-2989196684165.jpg',
  'https://i.ibb.co/VHBwQKP/38084-103-928937237819-1-35265298580802.jpg',
  'https://i.ibb.co/8NXq61R/38260-103-785732704859-1-29502818453393.jpg',
  'https://i.ibb.co/8BMPMNB/38310-103-849741317893-1-30775873215873.jpg',
  'https://i.ibb.co/nbPJzqp/38620-103-837497001759-1-30559339321501.jpg',
  'https://i.ibb.co/yfJSsKB/39077-104-006101234905-1-37262731975796.jpg',
  'https://i.ibb.co/kyKP9mw/39094-103-719012675099-1-37459286325851.jpg',
  'https://i.ibb.co/D8wMsyB/39435-103-895523613706-1-35516991948954.jpg',
  'https://i.ibb.co/Bc1PpSX/39463-103-908921262674-1-36513282107885.jpg',
  'https://i.ibb.co/3kBMRCd/39824-103-678286732058-1-34704016300087.jpg',
  'https://i.ibb.co/4K8h8gg/39974-103-924813079958-1-33335270599995.jpg',
  'https://i.ibb.co/ZKhkb7r/40268-103-69212077348-1-38088558807285.jpg',
  'https://i.ibb.co/MVhBtcp/40723-103-630399529936-1-27777545878742.jpg',
  'https://i.ibb.co/4YNVd8Q/40745-103-888299504607-1-39943170692357.jpg',
  'https://i.ibb.co/RTfntZM/41022-103-690346509487-1-38465858351896.jpg',
  'https://i.ibb.co/ZHvCt1J/41229-103-795019684971-1-43737060083312.jpg',
  'https://i.ibb.co/QDnjPHK/41611-103-700725725019-1-37255324090181.jpg',
  'https://i.ibb.co/bvBYxKs/42475-103-839861839931-1-4605788071571.jpg',
  'https://i.ibb.co/jWXvvrK/42884-103-86993190244-1-37393545932106.jpg',
  'https://i.ibb.co/rcKbSJ5/43298-103-625250091857-1-3034740260891.jpg',
  'https://i.ibb.co/f0nS7qS/43661-103-699751919704-1-35184605513948.jpg',
  'https://i.ibb.co/54w4vpy/43964-103-699305082986-1-34915589888758.jpg',
  'https://i.ibb.co/gW6sQ8G/43994-103-953402442303-1-32383723010426.jpg',
  'https://i.ibb.co/KD0SzFw/44520-103-785486933606-1-32577953759453.jpg',
  'https://i.ibb.co/0QRc8Wx/44767-103-873824488973-1-33218402469472.jpg',
  'https://i.ibb.co/k9zjDWZ/44869-103-793696919079-1-34966085521145.jpg',
  'https://i.ibb.co/Qkp7Y5R/44925-103-966534007882-1-35027784119094.jpg',
  'https://i.ibb.co/bL0Wf3f/45008-103-871928027498-1-40001623611742.jpg',
  'https://i.ibb.co/DQsVxNv/45049-103-872114717983-1-39206680908312.jpg',
  'https://i.ibb.co/8sCbzhn/45058-103-87241814872-1-36566120585198.jpg',
  'https://i.ibb.co/PG6rFD0/45543-103-876499238169-1-38708485812151.jpg',
  'https://i.ibb.co/RyYWCqk/45604-103-887322518261-1-35563602769821.jpg',
  'https://i.ibb.co/NnWm5Tc/45630-103-88044985545-1-363337736928.jpg',
  'https://i.ibb.co/r0tw6s8/46107-103-881036005906-1-35564178938513.jpg',
  'https://i.ibb.co/s33H8HT/46171-103-901756618682-1-30579943942129.jpg',
  'https://i.ibb.co/T4nQxCc/46237-103-905461240101-1-40114506153267.jpg',
  'https://i.ibb.co/4ZtZXcp/46727-103-884750626214-1-33942584425057.jpg',
  'https://i.ibb.co/CMqw5ss/46793-103-899364646138-1-38349883694141.jpg',
  'https://i.ibb.co/ZStYR6M/46977-103-902932828033-1-39345337876228.jpg',
  'https://i.ibb.co/jHF1ntW/47098-103-7058845383-1-32661508420929.jpg',
  'https://i.ibb.co/4spJM4w/47379-103-924765643004-1-32244290268205.jpg',
  'https://i.ibb.co/cgmTz2m/47596-103-933720114906-1-33380597555949.jpg',
  'https://i.ibb.co/Fz83psX/47734-103-915035213248-1-31146595615862.jpg',
  'https://i.ibb.co/hRLB6dz/48239-103-883802134396-1-3911828709615.jpg',
  'https://i.ibb.co/F8gKZB8/48244-103-871656975553-1-34459603984823.jpg',
  'https://i.ibb.co/LQTNbbh/48254-103-869174507946-1-34439924927715.jpg',
  'https://i.ibb.co/crrFTbZ/48450-103-885551488846-1-34600435281258.jpg',
  'https://i.ibb.co/BPtDkNg/48466-103-885092210172-1-34653639501121.jpg',
  'https://i.ibb.co/SK9dmZ5/48606-103-880643401209-1-37115319043665.jpg',
  'https://i.ibb.co/hRtyCST/48730-103-911024494253-1-32219195201854.jpg',
  'https://i.ibb.co/412jLZB/48884-103-934984373934-1-32607708422244.jpg',
  'https://i.ibb.co/KXWzhFm/49096-103-887422496308-1-29821008103964.jpg',
  'https://i.ibb.co/prHfR45/49536-103-762564385286-1-3874271966094.jpg',
  'https://i.ibb.co/Bg7MRfb/49994-103-961147064639-1-34333009729117.jpg',
  'https://i.ibb.co/C2FvJpq/50006-103-961166890088-1-34450576917607.jpg',
  'https://i.ibb.co/wWMgKBn/50776-103-957796123301-1-33699734883417.jpg',
  'https://i.ibb.co/fDzTcZp/50827-103-955790914933-1-35370691267708.jpg',
  'https://i.ibb.co/5s76vD8/50884-103-954248420013-1-33263357158524.jpg',
  'https://i.ibb.co/xDZcvvP/51079-103-927290779035-1-32031452801177.jpg',
  'https://i.ibb.co/NV336NK/51137-103-984646867158-1-39152346619979.jpg',
  'https://i.ibb.co/7t7xFsg/51230-103-938737208549-1-37437702893705.jpg',
  'https://i.ibb.co/ZxFP0Jg/51435-103-75788423624-1-32108740746737.jpg',
  'https://i.ibb.co/Px6QQMT/51447-103-783739821573-1-32685343231991.jpg',
  'https://i.ibb.co/ZzFH7Lv/51524-103-63878788047-1-30331752793616.jpg',
  'https://i.ibb.co/kgRC6Mt/51532-103-632757957025-1-29703219289584.jpg',
  'https://i.ibb.co/VYcrF1p/51753-103-746706667495-1-37424086604977.jpg',
  'https://i.ibb.co/yy7HDjp/52004-103-757917664468-1-4096496831696.jpg',
  'https://i.ibb.co/YDwpDhh/52051-103-674954036594-1-32877607231659.jpg',
  'https://i.ibb.co/cD4NS4N/52184-103-751684102265-1-3225411817849.jpg',
  'https://i.ibb.co/thg4L1J/52403-103-739496523676-1-37707908460697.jpg',
  'https://i.ibb.co/MD2Hk9g/52516-103-741340559128-1-37628079476278.jpg',
  'https://i.ibb.co/L5djVwj/52907-103-748487342304-1-41274109196038.jpg',
  'https://i.ibb.co/3zsS6Hj/52918-103-748092490405-1-29906871670651.jpg',
  'https://i.ibb.co/5TYKXLy/52991-103-755111960012-1-40488648128061.jpg',
  'https://i.ibb.co/J5SFHFQ/53061-103-752564404096-1-35260756197706.jpg',
  'https://i.ibb.co/BGwN5H0/53068-103-753348153206-1-32730805966888.jpg',
  'https://i.ibb.co/LPpq7HL/53104-103-74893378701-1-37827922610142.jpg',
  'https://i.ibb.co/fCH9vz1/53244-103-747792735908-1-32770872244777.jpg',
  'https://i.ibb.co/pWnygF1/53733-103-851918525392-1-42629001933582.jpg',
  'https://i.ibb.co/P6pC2tR/53998-103-786758260466-1-32301550587745.jpg',
  'https://i.ibb.co/WVW0bT7/54314-103-782296454323-1-31758139136701.jpg',
  'https://i.ibb.co/DpWyj4L/54406-103-814529390104-1-32445686353516.jpg',
  'https://i.ibb.co/6tXqgwC/54769-103-910786129858-1-41814715628635.jpg',
  'https://i.ibb.co/dpRbqwM/55173-103-841541439284-1-29934683211046.jpg',
  'https://i.ibb.co/6119Q42/55378-103-943869896273-1-37359032824039.jpg',
  'https://i.ibb.co/TkKSc4z/55606-103-818117587437-1-44140133415223.jpg',
  'https://i.ibb.co/dk0p3pq/55655-103-803921781514-1-43312993411324.jpg',
  'https://i.ibb.co/Qry1tJJ/55780-103-803297217902-1-43182826605583.jpg',
  'https://i.ibb.co/zJ2GKf7/56072-103-772800096512-1-44445474321258.jpg',
  'https://i.ibb.co/wgMfLtk/56138-103-855805183608-1-31164067729367.jpg',
  'https://i.ibb.co/S75y1CB/56355-103-774551048848-1-37214805652306.jpg',
  'https://i.ibb.co/TgF7MKd/56489-103-76888747848-1-43156263331483.jpg',
  'https://i.ibb.co/LnDjvzb/56651-103-763191904026-1-38721523377559.jpg',
  'https://i.ibb.co/J5SB4gm/56805-103-82063642058-1-45224179602942.jpg',
  'https://i.ibb.co/R6Tmzgs/57156-103-780101827826-1-42792585043885.jpg',
  'https://i.ibb.co/WBDGsWY/58000-103-834780521763-1-37307095732968.jpg',
  'https://i.ibb.co/SXDYggN/58238-103-85590985546-1-34533494838568.jpg',
  'https://i.ibb.co/JkFgnqC/58583-103-850523952848-1-39230029168872.jpg',
  'https://i.ibb.co/Qcp6W0S/58811-103-83498453088-1-38875953247225.jpg',
  'https://i.ibb.co/9vS8MF1/58925-103-849469555077-1-42591085571363.jpg',
  'https://i.ibb.co/84xyJwQ/58994-103-833713381805-1-34983445777133.jpg',
  'https://i.ibb.co/Gkg99Xf/59257-103-840946627908-1-38153523442379.jpg',
  'https://i.ibb.co/dDqssY6/59258-103-840598173193-1-38332725029354.jpg',
  'https://i.ibb.co/YRdDGKq/59643-103-846569116832-1-35490134340034.jpg',
  'https://i.ibb.co/C2PFcW6/60014-103-867407622478-1-36055767261419.jpg',
  'https://i.ibb.co/MgNm80y/60561-103-910188111186-1-4098189588287.jpg',
  'https://i.ibb.co/fqSB75s/60616-103-902177625245-1-39925027749989.jpg',
  'https://i.ibb.co/272CSy9/60792-103-90161516602-1-30835272515434.jpg',
  'https://i.ibb.co/C0nwF9Q/60823-103-900523931262-1-30940994917912.jpg',
  'https://i.ibb.co/JvvkVmN/61031-103-831414666838-1-45405191857269.jpg',
  'https://i.ibb.co/XXrnN8p/61646-103-865137406203-1-33360035589391.jpg',
  'https://i.ibb.co/bHsL5TC/62348-103-769050061933-1-43740912758758.jpg',
  'https://i.ibb.co/NCq9mYZ/62451-103-746887356721-1-43324041368459.jpg',
  'https://i.ibb.co/9ZH5zxx/62954-103-969374888842-1-33607483272727.jpg',
  'https://i.ibb.co/bP7dQMF/63345-103-828311968714-1-43250839145771.jpg',
  'https://i.ibb.co/nwqZKc9/63883-103-919370542146-1-41192375885964.jpg',
  'https://i.ibb.co/gyc1CXX/64136-103-754337914127-1-32783746757683.jpg',
  'https://i.ibb.co/phDcsFL/64489-103-794657490462-1-34273446141195.jpg',
  'https://i.ibb.co/zNCSwYk/64645-103-847536064305-1-29351408077193.jpg',
  'https://i.ibb.co/fD4RJbB/64680-103-735863751403-1-44196979650536.jpg',
  'https://i.ibb.co/YTHG3DW/64712-103-863249773571-1-32152030388688.jpg',
  'https://i.ibb.co/CJTySjn/64808-103-913426356031-1-40351988667124.jpg',
  'https://i.ibb.co/16g5JLW/64857-103-843771564497-1-42359824787723.jpg',
  'https://i.ibb.co/kcSgDhs/64955-103-882515575587-1-30627232247184.jpg',
  'https://i.ibb.co/nkJKsXZ/64967-103-76865669298-1-31201817334729.jpg',
  'https://i.ibb.co/CvFLNPT/65219-103-838170424899-1-3493180136701.jpg',
  'https://i.ibb.co/4pcxdpg/65434-103-766927793607-1-33267426700514.jpg',
  'https://i.ibb.co/qrLM7TN/65457-103-878619823401-1-31501307934101.jpg',
  'https://i.ibb.co/SrbD47r/65776-103-883740256327-1-31247721865476.jpg',
  'https://i.ibb.co/4TzwTtC/65847-103-884138996358-1-31077035958711.jpg',
  'https://i.ibb.co/2MRHtSc/66046-103-816403186912-1-33535510609077.jpg',
  'https://i.ibb.co/wcDpSHP/66052-103-800383569086-1-29628877454303.jpg',
  'https://i.ibb.co/W3m8m0b/66107-103-927388317274-1-31363190196187.jpg',
  'https://i.ibb.co/Vt1pX0q/66204-103-838649737712-1-29141722789309.jpg',
  'https://i.ibb.co/xL5Jn1s/66921-103-713139746607-1-44484489143752.jpg',
  'https://i.ibb.co/NNxs6St/67167-103-926885062538-1-30431863627434.jpg',
  'https://i.ibb.co/h8QLMBT/67349-103-874891395445-1-36397577537111.jpg',
  'https://i.ibb.co/LPYq85p/68038-103-913424739484-1-31891414090074.jpg',
  'https://i.ibb.co/FnX1TTf/68202-103-84579266732-1-29109639511842.jpg',
  'https://i.ibb.co/ZXSycWV/68541-103-821919097125-1-28898352708789.jpg',
  'https://i.ibb.co/6nRbBFY/68581-103-785580641495-1-4267232236882.jpg',
  'https://i.ibb.co/1dTKWnb/68700-103-816559044393-1-32267168298468.jpg',
  'https://i.ibb.co/JCMx5sp/68779-103-768639116131-1-36519373596981.jpg',
  'https://i.ibb.co/Gv3hWyz/69008-103-91198249438-1-30679537730568.jpg',
  'https://i.ibb.co/4Yb5yM8/69034-103-854498805199-1-34868557641236.jpg',
  'https://i.ibb.co/RyvSLgH/69548-103-827153681909-1-34283480398949.jpg',
  'https://i.ibb.co/vJpbq7z/69577-103-804820143314-1-29222130810384.jpg',
  'https://i.ibb.co/QbLFg8q/69615-103-885422171407-1-30482790992683.jpg',
  'https://i.ibb.co/xGPS8D0/69799-103-886785399379-1-35470551101976.jpg',
  'https://i.ibb.co/8Xk5Xgk/69812-103-643186769421-1-34234770469827.jpg',
  'https://i.ibb.co/R6v0Mzs/69925-103-767052588614-1-2908446751714.jpg',
  'https://i.ibb.co/JrbMr0T/70094-103-742405658901-1-319189078186.jpg',
  'https://i.ibb.co/V96MxKn/70276-103-987764260835-1-38977524151387.jpg',
  'https://i.ibb.co/72Q1fwp/70335-103-809667033159-1-31780239522258.jpg',
  'https://i.ibb.co/FzVnzZ9/70547-103-823445886844-1-4482580934276.jpg',
  'https://i.ibb.co/5GbTz0Q/70729-103-776774413687-1-29407334356936.jpg',
  'https://i.ibb.co/6W6fqXg/70901-103-806162212391-1-33425064482827.jpg',
  'https://i.ibb.co/1T94Dnz/71033-103-768652248772-1-43083475777953.jpg',
  'https://i.ibb.co/c20bbxK/71153-103-8423784138-1-38400374706225.jpg',
  'https://i.ibb.co/V2hWDfB/71229-103-754691402008-1-43727772372652.jpg',
  'https://i.ibb.co/gRKZfph/71282-103-776344767479-1-33769471252552.jpg',
  'https://i.ibb.co/vHGcrDc/72026-103-814532454377-1-44307503386583.jpg',
  'https://i.ibb.co/cC445rQ/72086-103-771501705449-1-44714381776333.jpg',
  'https://i.ibb.co/Dt6v5f8/72125-103-731983629963-1-33568076035768.jpg',
  'https://i.ibb.co/q1nxhCt/72804-103-923813959255-1-39534197093188.jpg',
  'https://i.ibb.co/ySVB6JF/72824-103-908644628953-1-30527631223609.jpg',
  'https://i.ibb.co/M2yc3nN/72892-103-983401803694-1-39157350179348.jpg',
  'https://i.ibb.co/ZH59ndp/73146-103-799779717066-1-44498581388035.jpg',
  'https://i.ibb.co/kxy3VzZ/73339-103-845856135121-1-36319457926079.jpg',
  'https://i.ibb.co/0MkhTrX/73461-103-845379267005-1-28438568083297.jpg',
  'https://i.ibb.co/dWcZPPF/73606-103-801246063432-1-29969688456827.jpg',
  'https://i.ibb.co/GR14BjM/73713-103-825955874397-1-36927298725744.jpg',
  'https://i.ibb.co/m6GSVJx/73989-103-820229789976-1-27518685421842.jpg',
  'https://i.ibb.co/Fxng6RX/74001-103-853661468801-1-29872889511009.jpg',
  'https://i.ibb.co/hWLJDjx/74097-103-875488972434-1-396364376516.jpg',
  'https://i.ibb.co/27TY88N/74202-103-929677322725-1-31854494860857.jpg',
  'https://i.ibb.co/yBLm70n/74854-103-868598631314-1-37828174234207.jpg',
  'https://i.ibb.co/BTKc7N0/75192-103-777924921369-1-30828245409122.jpg',
  'https://i.ibb.co/FqM3QFK/75231-103-937896866608-1-35383488221622.jpg',
  'https://i.ibb.co/NNKxw2h/75301-103-932839501324-1-32575733870424.jpg',
  'https://i.ibb.co/89zfdgW/75335-103-88284625058-1-32107110259534.jpg',
  'https://i.ibb.co/xXRMqB6/75422-103-849082453702-1-29219423232481.jpg',
  'https://i.ibb.co/Vq0CC8G/75725-103-953723624829-1-35293639125388.jpg',
  'https://i.ibb.co/rMxb6w2/75886-103-848167671053-1-34154706628159.jpg',
  'https://i.ibb.co/C0tHPkD/75927-103-974495754117-1-35243159130085.jpg',
  'https://i.ibb.co/C6FDGMR/76371-103-784437121221-1-288917715185.jpg',
  'https://i.ibb.co/PT7xM0n/76456-103-842360997269-1-24770203313437.jpg',
  'https://i.ibb.co/4mLzvBV/76723-103-964369828023-1-33462840966041.jpg',
  'https://i.ibb.co/prNWQv4/76866-103-802497576626-1-45988776840752.jpg',
  'https://i.ibb.co/SXw1gTw/77057-103-811627733797-1-45447515732624.jpg',
  'https://i.ibb.co/NSMXr6m/77067-103-810594994486-1-45064509725295.jpg',
  'https://i.ibb.co/p3jZrmt/77237-103-923307869812-1-34723501972736.jpg',
  'https://i.ibb.co/PYgng7G/77397-103-896070824952-1-39672701093723.jpg',
  'https://i.ibb.co/LhLnXJ1/77591-103-967697609183-1-35336484590695.jpg',
  'https://i.ibb.co/XpnSfyg/77608-103-770060928207-1-36703371037607.jpg',
  'https://i.ibb.co/kJfx1K0/77627-103-814549410989-1-28661357435112.jpg',
  'https://i.ibb.co/NssVxwY/77847-103-86018781283-1-36917146623924.jpg',
  'https://i.ibb.co/zbHFKL2/78114-103-913303546214-1-31849671730732.jpg',
  'https://i.ibb.co/MSVBJ2L/78440-103-938010950663-1-33682142944237.jpg',
  'https://i.ibb.co/fFZR2yY/78846-103-756083777479-1-43709897528658.jpg',
  'https://i.ibb.co/LNv52QQ/79252-103-777137454802-1-31924060382601.jpg',
  'https://i.ibb.co/PMWsvQV/79298-103-924234646448-1-31501335144199.jpg',
  'https://i.ibb.co/t3BRF6f/79902-103-881621430758-1-33204310081161.jpg',
  'https://i.ibb.co/Dz9bScT/80019-103-876021729155-1-33042449028175.jpg',
  'https://i.ibb.co/LCRW5JD/80101-103-844602977328-1-32165473570868.jpg',
  'https://i.ibb.co/n1wF2Jc/80236-103-845602219936-1-37058776855699.jpg',
  'https://i.ibb.co/ZR9yrC2/80808-103-954987140658-1-36123119578642.jpg',
  'https://i.ibb.co/8bGmbpB/80946-103-651024736419-1-31897904448885.jpg',
  'https://i.ibb.co/ynL4XZW/80988-103-951270437658-1-3616399264394.jpg',
  'https://i.ibb.co/frn6pHn/81004-103-940958264602-1-34521840923011.jpg',
  'https://i.ibb.co/qdD36Pg/81109-103-839432938361-1-34184886640358.jpg',
  'https://i.ibb.co/PFffb1T/81321-103-848040541479-1-28692733850086.jpg',
  'https://i.ibb.co/QHWKY2w/81492-103-651849592077-1-31715543191631.jpg',
  'https://i.ibb.co/drwdrMk/81717-103-724309821133-1-33472384541861.jpg',
  'https://i.ibb.co/KwdV8Xn/81856-103-976439619385-1-38792717931162.jpg',
  'https://i.ibb.co/zRHJgwG/81860-103-766501140727-1-42997660676465.jpg',
  'https://i.ibb.co/mDWBQPL/81985-103-792195145567-1-43086259622835.jpg',
  'https://i.ibb.co/PWkdn96/82220-103-892431475479-1-38486442959941.jpg',
  'https://i.ibb.co/cCSdwQW/82498-103-779323054283-1-29470353271552.jpg',
  'https://i.ibb.co/0JqQmqJ/82719-103-959283420265-1-34936453288.jpg',
  'https://i.ibb.co/thtNVDj/82873-103-800390587343-1-27336954119745.jpg',
  'https://i.ibb.co/GTCBk3p/83023-103-84253157425-1-36286217705203.jpg',
  'https://i.ibb.co/3BD4f0x/83136-103-754822832253-1-4364797153292.jpg',
  'https://i.ibb.co/HpxfHrd/83276-103-855965120019-1-31458931921101.jpg',
  'https://i.ibb.co/RyHMDCS/83322-103-905507613858-1-41010248200453.jpg',
  'https://i.ibb.co/Qnx3MP0/83867-103-702596631163-1-43479676442148.jpg',
  'https://i.ibb.co/g4YkTZd/83943-103-826146479638-1-26601169666022.jpg',
  'https://i.ibb.co/QpXCyML/84154-103-822084092164-1-38569515688154.jpg',
  'https://i.ibb.co/nzgzV2V/84192-103-80939457152-1-45426582526493.jpg',
  'https://i.ibb.co/YBVTScx/84375-103-8404308947-1-30682812846296.jpg',
  'https://i.ibb.co/4g1CD6Y/84418-103-846413556978-1-36307038488984.jpg',
  'https://i.ibb.co/YhBmxjP/84565-103-822590650106-1-26501053507565.jpg',
  'https://i.ibb.co/KVtwknp/84762-103-831234099717-1-25364419308941.jpg',
  'https://i.ibb.co/HXn7725/84792-103-850211937714-1-39282276429549.jpg',
  'https://i.ibb.co/8dYJ4pB/84862-103-927448302617-1-30473925409597.jpg',
  'https://i.ibb.co/BsFhDZc/84935-103-85663148215-1-40019930720507.jpg',
  'https://i.ibb.co/g74G3mX/85220-103-739267972289-1-32063589839691.jpg',
  'https://i.ibb.co/XpYKxMt/85493-103-894473133934-1-36394118943167.jpg',
  'https://i.ibb.co/XbrRrBC/85734-103-626845134442-1-31289574334769.jpg',
  'https://i.ibb.co/FsWc20W/85876-103-916698764321-1-37956503061257.jpg',
  'https://i.ibb.co/dBMDMxX/85984-103-975255252255-1-36024712424636.jpg',
  'https://i.ibb.co/Fsv2PjV/86393-103-860896445728-1-28254162628457.jpg',
  'https://i.ibb.co/pyprZG0/86404-103-880416786446-1-30864962526561.jpg',
  'https://i.ibb.co/CnSc8DX/86656-103-822059282397-1-33643926626602.jpg',
  'https://i.ibb.co/qYNVLyP/86808-103-678452503693-1-32803208871469.jpg',
  'https://i.ibb.co/3RLHbw7/86983-103-945652622972-1-34850369921029.jpg',
  'https://i.ibb.co/0CYVcRt/87082-103-719026641998-1-33534299179013.jpg',
  'https://i.ibb.co/pw5f4gW/87123-103-970943110907-1-32359670207896.jpg',
  'https://i.ibb.co/zhdFDNp/87362-103-965442065863-1-36250242768631.jpg',
  'https://i.ibb.co/pjQ6R7B/88652-103-791712324039-1-43089928995446.jpg',
  'https://i.ibb.co/vHQvC8F/88701-103-657150776536-1-31772639459914.jpg',
  'https://i.ibb.co/kM7scrq/88746-103-650337202467-1-33209257592548.jpg',
  'https://i.ibb.co/9ySbLwV/88961-103-744852908088-1-41417273579346.jpg',
  'https://i.ibb.co/QprvBr9/89442-103-781991209892-1-40760674667352.jpg',
  'https://i.ibb.co/6Rgx28q/90026-103-948242021379-1-32980592874002.jpg',
  'https://i.ibb.co/3FdTrmv/90113-103-637017747125-1-28931707132668.jpg',
  'https://i.ibb.co/yQDMF7R/90190-103-746981885219-1-40363624155366.jpg',
  'https://i.ibb.co/Mnk9YRB/90264-103-84361742179-1-42091682985924.jpg',
  'https://i.ibb.co/yfV7J6r/90466-103-870699197726-1-34110925972012.jpg',
  'https://i.ibb.co/hZPMRJD/90560-103-769527449968-1-35363350995469.jpg',
  'https://i.ibb.co/KFyxpKY/90893-103-743843794522-1-34155002537229.jpg',
  'https://i.ibb.co/85NjJbt/91242-103-765036985949-1-36839181692378.jpg',
  'https://i.ibb.co/3yRXmmc/91353-103-81675176237-1-45468396248947.jpg',
  'https://i.ibb.co/4FkShPP/91839-103-879769755467-1-38972643571651.jpg',
  'https://i.ibb.co/yWLg3Bk/91917-103-889665626814-1-32296338793044.jpg',
  'https://i.ibb.co/3f8Gc4V/92069-103-860760789188-1-36212557341103.jpg',
  'https://i.ibb.co/zFHTtmJ/Street-View-360-0.jpg',
  'https://i.ibb.co/XZmbpQc/Street-View-360-2.jpg',
  'https://i.ibb.co/MZZJ6Tn/Street-View-360-4.jpg',
  'https://i.ibb.co/RSv0BBw/Street-View-360-6.jpg',
  'https://i.ibb.co/vD07Fx6/Street-View-360-8.jpg',
  'https://i.ibb.co/5h6gXPR/Street-View-360-10.jpg',
  'https://i.ibb.co/W6qW7Rk/Street-View-360-12.jpg',
  'https://i.ibb.co/0nw5b3N/Street-View-360-14.jpg',
  'https://i.ibb.co/cw1GSd2/Street-View-360-16.jpg',
  'https://i.ibb.co/8dDsqkD/Street-View-360-18.jpg',
  'https://i.ibb.co/b1Zswzw/Street-View-360-20.jpg',
  'https://i.ibb.co/XjsJB6m/Street-View-360-22.jpg',
  'https://i.ibb.co/3029gNC/Street-View-360-24.jpg',
  'https://i.ibb.co/vsSqgkh/Street-View-360-26.jpg',
  'https://i.ibb.co/sCCYT1d/Street-View-360-28.jpg',
  'https://i.ibb.co/M7CFz4G/Street-View-360-30.jpg',
  'https://i.ibb.co/h7D7NJY/Street-View-360-32.jpg',
  'https://i.ibb.co/KmZ6CwN/Street-View-360-34.jpg',
  'https://i.ibb.co/bmqfHFK/Street-View-360-36.jpg',
  'https://i.ibb.co/rtYK1xV/Street-View-360-38.jpg',
  'https://i.ibb.co/vq4P8fj/Street-View-360-40.jpg',
  'https://i.ibb.co/0203G7K/Street-View-360-42.jpg',
  'https://i.ibb.co/zJTSwGM/Street-View-360-44.jpg',
  'https://i.ibb.co/XsdrmZq/Street-View-360-46.jpg',
  'https://i.ibb.co/jW35Wrc/Street-View-360-48.jpg',
  'https://i.ibb.co/2dDVmn3/Street-View-360-50.jpg',
  'https://i.ibb.co/WxkSfCn/Street-View-360-52.jpg',
  'https://i.ibb.co/qnzxXd7/Street-View-360-54.jpg',
  'https://i.ibb.co/wW3Hbw3/Street-View-360-56.jpg',
  'https://i.ibb.co/9t350wb/Street-View-360-58.jpg',
  'https://i.ibb.co/0cncrt1/Street-View-360-60.jpg',
  'https://i.ibb.co/hgXnQ3s/Street-View-360-62.jpg',
];

const imageChoicesMap = {};

// Generate a random, non-repeating subset of four image urls.
function getRandomImages(questionName) {
  let images = [...imageUrls]; // Copy the array.
  let result = [];
  for (let i = 0; i < 4; i++) {
    
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageName = images[randomIndex].split('/').pop(); // Extract the image name from the URL.
    result.push({
      value: imageName, // Using the image URL as the value.
      imageLink: images[randomIndex]
    });
    images.splice(randomIndex, 1); // Remove the selected image from the array to avoid repetition.
  }
  imageChoicesMap[questionName] = result; // Store the two images for the given question name.
  return result;
}


const surveyJson = {
  "title": "Urban Streetscape Perception Survey",
  "description": "Hello! Here at the Urban Analytics Lab at the National University of Singapore, we are currently conducting an online perception survey that will take approximately 15 minutes to complete and consists of around 50 questions regarding photos taken at the street-level. Such a survey will help us understand what drives people’s perception and how to design spaces that are visually appealing. Throughout the survey, participants’ main task is to select the most suitable street view image among multiple images based on certain dimensions and personal impressions. As a token of appreciation, participants who successfully complete the full survey will receive a compensation fee of SGD 5.",
  "logo": "https://api.surveyjs.io/private/Surveys/files?name=8fb3943d-2606-4486-88ad-a41ad27f4570",
  "logoPosition": "right",
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "expression",
      "name": "text1",
      "title": "Among the provided street view images, which place do you perceive to be the most comfortable?  ",
      "description": "There are six sets in total, and you need to pick one image in each set."
     },
     {
      "type": "imagepicker",
      "name": "comfort_1",
      "title": "Comfort (1)",
      "description": "choose the most comfortable one.",
      "isRequired": true,
      "choices": getRandomImages("comfort_1"),
      "imageFit": "cover"
     },
     {
      "type": "imagepicker",
      "name": "comfort_2",
      "title": "Comfort (2)",
      "description": "choose the most comfortable one",
      "isRequired": true,
      "choices": getRandomImages("comfort_2")
     },
     {
      "type": "imagepicker",
      "name": "comfort_3",
      "title": "Comfort (3)",
      "description": "choose the most comfortable one",
      "isRequired": true,
      "choices": getRandomImages("comfort_3")
     },
     {
      "type": "imagepicker",
      "name": "comfort_4",
      "title": "Comfort (4)",
      "description": "choose the most comfortable one",
      "isRequired": true,
      "choices": getRandomImages("comfort_4")
     },
     {
      "type": "imagepicker",
      "name": "comfort_5",
      "title": "Comfort (5)",
      "description": "choose the most comfortable one",
      "isRequired": true,
      "choices": getRandomImages("comfort_5")
     },
     {
      "type": "imagepicker",
      "name": "comfort_6",
      "title": "Comfort (6)",
      "description": "choose the most comfortable one",
      "isRequired": true,
      "choices": getRandomImages("comfort_6")
     }
    ],
    "title": "Part 1: Streetscape Comfort Perception",
    "description": "Please choose the image which you find to have the most comfortable streetscape, there are six sets of images in this section."
   },
   {
    "name": "page2",
    "elements": [
     {
      "type": "expression",
      "name": "text2",
      "title": "Among the provided street view images, which place do you perceive to have the best thermal comfort (heat comfort) ?",
      "description": "There are six sets in total, and you need to pick one image in each set."
     },
     {
      "type": "imagepicker",
      "name": "thermal_comfort_1",
      "title": "Thermal Comfort (1)",
      "description": "choose the most thermal (heat) -comfortable one",
      "isRequired": true,
      "choices": getRandomImages("thermal_comfort_1")
     },
     {
      "type": "imagepicker",
      "name": "thermal_comfort_2",
      "title": "Thermal Comfort (2)",
      "description": "choose the most thermal (heat) -comfortable one",
      "isRequired": true,
      "choices": getRandomImages("thermal_comfort_2")
     },
     {
      "type": "imagepicker",
      "name": "thermal_comfort_3",
      "title": "Thermal Comfort (3)",
      "description": "choose the most thermal (heat) -comfortable one",
      "isRequired": true,
      "choices": getRandomImages("thermal_comfort_3")
     },
     {
      "type": "imagepicker",
      "name": "thermal_comfort_4",
      "title": "Thermal Comfort (4)",
      "description": "choose the most thermal (heat) -comfortable one",
      "isRequired": true,
      "choices": getRandomImages("thermal_comfort_4")
     },
     {
      "type": "imagepicker",
      "name": "thermal_comfort_5",
      "title": "Thermal Comfort (5)",
      "description": "choose the most thermal (heat) -comfortable one",
      "isRequired": true,
      "choices": getRandomImages("thermal_comfort_5")
     },
     {
      "type": "imagepicker",
      "name": "thermal_comfort_6",
      "title": "Thermal Comfort (6)",
      "description": "choose the most thermal (heat) -comfortable one",
      "isRequired": true,
      "choices": getRandomImages("thermal_comfort_6")
     }
    ],
    "title": "Part 2: Streetscape Thermal Comfort (Heat Comfort) Perception",
    "description": "Please choose the image in which you think to have the best thermal comfort (heat comfort), there are six sets of images in this section."
   },
   {
    "name": "page3",
    "elements": [
     {
      "type": "expression",
      "name": "text3",
      "title": "Among the provided street view images, which place do you perceive to exhibit the following environmental parameters most?",
      "description": "There are nine parameters in total, and you need to pick one image for each parameter."
     },
     {
      "type": "imagepicker",
      "name": "temperature",
      "title": "Temperature",
      "description": "choose the one with highest temperature",
      "isRequired": true,
      "choices": getRandomImages("temperature")
     },
     {
      "type": "imagepicker",
      "name": "sun_intensity",
      "title": "Sunlight Intensity",
      "description": "choose the one with highest sunlight intensity",
      "isRequired": true,
      "choices": getRandomImages("sun_intensity")
     },
     {
      "type": "imagepicker",
      "name": "heat_sources",
      "title": "Artificial Heat Sources",
      "description": "choose the one with most artificial heat sources (building, car...)",
      "isRequired": true,
      "choices": getRandomImages("heat_sources")
     },
     {
      "type": "imagepicker",
      "name": "humidity",
      "title": "Humidity",
      "description": "choose the one with highest humidity",
      "isRequired": true,
      "choices": getRandomImages("humidity")
     },
     {
      "type": "imagepicker",
      "name": "wind_velocity",
      "title": "Wind Velocity",
      "description": "choose the one with highest wind velocity",
      "isRequired": true,
      "choices": getRandomImages("wind_velocity")
     },
     {
      "type": "imagepicker",
      "name": "traffic_flow",
      "title": "Traffic Flow",
      "description": "choose the one with highest traffic flow (car, people, bike...)",
      "isRequired": true,
      "choices": getRandomImages("traffic_flow")
     },
     {
      "type": "imagepicker",
      "name": "greenery",
      "title": "Greenery",
      "description": "choose the one with most greenery",
      "isRequired": true,
      "choices": getRandomImages("greenery")
     },
     {
      "type": "imagepicker",
      "name": "shading_area",
      "title": "Shading Area",
      "description": "choose the one with largest shading area",
      "isRequired": true,
      "choices": getRandomImages("shading_area")
     },
     {
      "type": "imagepicker",
      "name": "construction_material",
      "title": "Construction Material Comfort",
      "description": "choose the one with most comfortable construction material (plant, wall, fence, window...)",
      "isRequired": true,
      "choices": getRandomImages("construction_material")
     }
    ],
    "title": "Part 3: Streetscape Environment Perception",
    "description": "Please choose the image in which you think to exhibit the following environmental parameters most, there are nine parameters in this section."
   },
   {
    "name": "page4",
    "elements": [
     {
      "type": "expression",
      "name": "text4",
      "title": "Among the provided street view images, which place do you perceive to showcase the following design quality features most?",
      "description": "There are five streetscape design quality features in total, and you need to pick one image for each design quality feature."
     },
     {
      "type": "imagepicker",
      "name": "imageability",
      "title": "Impressive",
      "description": "choose the most impressive one",
      "isRequired": true,
      "choices": getRandomImages("imageability")
     },
     {
      "type": "imagepicker",
      "name": "enclosure",
      "title": "Enclosure",
      "description": "choose the most enclosed one",
      "isRequired": true,
      "choices": getRandomImages("enclosure")
     },
     {
      "type": "imagepicker",
      "name": "human_scale",
      "title": "Human-friendly",
      "description": "choose the most human-friendly one",
      "isRequired": true,
      "choices": getRandomImages("human_scale")
     },
     {
      "type": "imagepicker",
      "name": "transparency",
      "title": "Transparency",
      "description": "choose the most transparent one",
      "isRequired": true,
      "choices": getRandomImages("transparency")
     },
     {
      "type": "imagepicker",
      "name": "complexity",
      "title": "Complexity",
      "description": "choose the most complex one",
      "isRequired": true,
      "choices": getRandomImages("complexity")
     }
    ],
    "title": "Part 4: Streetscape Design Perception",
    "description": "Please choose the image in which you think to showcase the following design quality features most, there are five design quality features in this section."
   },
   {
    "name": "page5",
    "elements": [
     {
      "type": "expression",
      "name": "text5",
      "title": "Among the provided street view images, which place do you perceive to have following emotions most?",
      "description": "There are six emotion types in total, and you need to pick one image for each emotion type."
     },
     {
      "type": "imagepicker",
      "name": "safe",
      "title": "Safe",
      "description": "choose the most safe one",
      "isRequired": true,
      "choices": getRandomImages("safe")
     },
     {
      "type": "imagepicker",
      "name": "lively",
      "title": "Lively",
      "description": "choose the most lively one",
      "isRequired": true,
      "choices": getRandomImages("lively")
     },
     {
      "type": "imagepicker",
      "name": "beautiful",
      "title": "Beautiful",
      "description": "choose the most beautiful one",
      "isRequired": true,
      "choices": getRandomImages("beautiful")
     },
     {
      "type": "imagepicker",
      "name": "wealthy",
      "title": "Wealthy",
      "description": "choose the most wealthy one",
      "isRequired": true,
      "choices": getRandomImages("wealthy")
     },
     {
      "type": "imagepicker",
      "name": "boring",
      "title": "Boring",
      "description": "choose the most boring one",
      "isRequired": true,
      "choices": getRandomImages("boring")
     },
     {
      "type": "imagepicker",
      "name": "depressing",
      "title": "Depressing",
      "description": "choose the most depressing one",
      "isRequired": true,
      "choices": getRandomImages("depressing")
     }
    ],
    "title": "Part 5: Streetscape Emotion Perception",
    "description": "Please choose the image in which you think to make people have following emotions most, there are six emotional types in this section."
   },
   {
    "name": "page6",
    "elements": [
     {
      "type": "expression",
      "name": "text6-0",
      "title": "Please first read the explanation of four urban spatial features listed below."
     },
     {
      "type": "image",
      "name": "image_streetscape",
      "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=73944150-4439-4860-8629-ae645fe3123d",
      "imageFit": "cover",
      "imageHeight": "auto",
      "imageWidth": "100%"
     },
     {
      "type": "expression",
      "name": "text6-1",
      "title": "Feature 1: Streetscape Perception - Whether the surrounding urban environment offers a comfortable experience.",
      "description": "(comfort, greenery, safety, etc)"
     },
     {
      "type": "image",
      "name": "image_functionality",
      "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=d36f125b-576c-4611-b271-f66e7e926d3d",
      "imageFit": "cover",
      "imageHeight": "auto",
      "imageWidth": "100%"
     },
     {
      "type": "expression",
      "name": "text6-2",
      "title": "Feature 2: Functionality - Whether the surrounding urban function quality and density can meet requirements.",
      "description": "(function quality, density)"
     },
     {
      "type": "image",
      "name": "image_accessibility",
      "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=71a03eea-6018-4af2-92ad-5964c8ca3a56",
      "imageFit": "cover",
      "imageHeight": "auto",
      "imageWidth": "100%"
     },
     {
      "type": "expression",
      "name": "text6-3",
      "title": "Feature 3: Accessibility - Whether the location is easily accessible by walking or public transportation.",
      "description": "(distance, public traffic service)"
     },
     {
      "type": "image",
      "name": "image_contact_density",
      "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=e84963d2-a9a4-41e6-8207-ae6fbebc9bc7",
      "imageFit": "cover",
      "imageHeight": "auto",
      "imageWidth": "100%"
     },
     {
      "type": "expression",
      "name": "text6-4",
      "title": "Feature 4: Contact Density - Whether the location is lively or quiet based on population density.",
      "description": "(vibrant / peaceful)"
     },
     {
      "type": "expression",
      "name": "text6",
      "title": "If you are looking for a place to have following activities, what spatial feature holds the highest importance to you? ",
      "description": "There are four spatial features in total, and you need to rank these features in descending order of its importance to specifically mentioned activity in questions."
     },
     {
      "type": "image",
      "name": "image1",
      "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=0b53e835-c466-48b4-91f4-eae77a212f7c",
      "imageFit": "cover",
      "imageHeight": "auto",
      "imageWidth": "100%"
     },
     {
      "type": "ranking",
      "name": "eating_drinking",
      "title": "Eating & Drinking",
      "description": "(Drag to rank in descending order of spatial feature importance for eating / drinking activity)",
      "setValueIf": "{eating_drinking} allof ['Item 1']",
      "isRequired": true,
      "choices": [
       {
        "value": "perception",
        "text": "Streetscape Perception (comfort, greenery, safety, etc)"
       },
       {
        "value": "functionality",
        "text": "Functionality (function quality, density)"
       },
       {
        "value": "accessibility",
        "text": "Accessibility (distance, public traffic service)"
       },
       {
        "value": "contact",
        "text": "Contact Density (vibrant / peaceful)"
       }
      ]
     },
     {
      "type": "image",
      "name": "image2",
      "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=79db2cf2-9702-42fb-b1f2-fb376ecbbab4",
      "imageFit": "cover",
      "imageHeight": "auto",
      "imageWidth": "100%"
     },
     {
      "type": "ranking",
      "name": "nature_exploration",
      "title": "Nature Exploration",
      "description": "(Drag to rank in descending order of spatial feature importance for nature exploration activity)\n",
      "setValueIf": "{nature_exploration} allof ['Item 1']",
      "isRequired": true,
      "choices": [
       {
        "value": "perception",
        "text": "Streetscape Perception (comfort, greenery, safety, etc)"
       },
       {
        "value": "functionality",
        "text": "Functionality (function quality, density)"
       },
       {
        "value": "accessibility",
        "text": "Accessibility (distance, public traffic service)"
       },
       {
        "value": "contact",
        "text": "Contact Density (vibrant / peaceful)"
       }
      ]
     },
     {
      "type": "image",
      "name": "image3",
      "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=3aef7ca4-fffd-498e-a9d1-7e461a822cf9",
      "imageFit": "cover",
      "imageHeight": "auto",
      "imageWidth": "100%"
     },
     {
      "type": "ranking",
      "name": "community_gathering",
      "title": "Community Gathering",
      "description": "(Drag to rank in descending order of spatial feature importance for community gathering activity)\n",
      "setValueIf": "{community_gathering} allof ['Item 1']",
      "isRequired": true,
      "choices": [
       {
        "value": "perception",
        "text": "Streetscape Perception (comfort, greenery, safety, etc)"
       },
       {
        "value": "functionality",
        "text": "Functionality (function quality, density)"
       },
       {
        "value": "accessibility",
        "text": "Accessibility (distance, public traffic service)"
       },
       {
        "value": "contact",
        "text": "Contact Density (vibrant / peaceful)"
       }
      ]
     },
     {
      "type": "image",
      "name": "image4",
      "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=bd89a7f7-4614-49b6-bfcc-3c90f12289c4",
      "imageFit": "cover",
      "imageHeight": "auto",
      "imageWidth": "100%"
     },
     {
      "type": "ranking",
      "name": "citywalking",
      "title": "City-walking & Exercising",
      "description": "(Drag to rank in descending order of spatial feature importance for city walking and exercising activity)",
      "setValueIf": "{citywalking} allof ['Item 1']",
      "isRequired": true,
      "choices": [
       {
        "value": "perception",
        "text": "Streetscape Perception (comfort, greenery, safety, etc)"
       },
       {
        "value": "functionality",
        "text": "Functionality (function quality, density)"
       },
       {
        "value": "accessibility",
        "text": "Accessibility (distance, public traffic service)"
       },
       {
        "value": "contact",
        "text": "Contact Density (vibrant / peaceful)"
       }
      ]
     },
     {
      "type": "image",
      "name": "image5",
      "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=0df23fc8-4358-4ba7-8b08-6dfe850a19f5",
      "imageFit": "cover",
      "imageHeight": "auto",
      "imageWidth": "100%"
     },
     {
      "type": "ranking",
      "name": "urban_sightseeing",
      "title": "Urban Sightseeing",
      "description": "(Drag to rank in descending order of spatial feature importance for urban sightseeing activity)\n",
      "setValueIf": "{urban_sightseeing} allof ['Item 1']",
      "isRequired": true,
      "choices": [
       {
        "value": "perception",
        "text": "Streetscape Perception (comfort, greenery, safety, etc)"
       },
       {
        "value": "functionality",
        "text": "Functionality (function quality, density)"
       },
       {
        "value": "accessibility",
        "text": "Accessibility (distance, public traffic service)"
       },
       {
        "value": "contact",
        "text": "Contact Density (vibrant / peaceful)"
       }
      ]
     }
    ],
    "title": "Part 6: Spatial Preference for Social Activity",
    "description": "For following questions, please rank the following four spatial features in descending order of importance on specifically mentioned activities: Streetscape Perception, Functionality, Accessibility, Contact Density."
   },
   {
    "name": "page7",
    "elements": [
     {
      "type": "expression",
      "name": "text7",
      "title": "Considering the four spatial features, rank the activities based on how important you believe those spatial features are for each activity.",
      "description": "There are 4 spatial features in total, and you need to rank these features in descending order of its importance to specifically mentioned activity in questions.",
      "setValueIf": "{text7} allof ['Item 1']",
      "isRequired": true
     },
     {
      "type": "image",
      "name": "image7-1",
      "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=6e339d6c-9353-45cb-aea2-1dbdcc12cc9f",
      "imageFit": "cover",
      "imageHeight": "auto",
      "imageWidth": "100%"
     },
     {
      "type": "ranking",
      "name": "streetscape_perception",
      "title": "Streetscape Perception (comfort, greenery, safety, etc): Rank the most related activity.",
      "description": "(Drag to rank in descending order of importance of Streetscape Perception on activities)",
      "setValueIf": "{streetscape_perception} allof ['Item 1']",
      "isRequired": true,
      "choices": [
       {
        "value": "eating",
        "text": "Eating / Drinking"
       },
       {
        "value": "nature",
        "text": "Nature Exploration"
       },
       {
        "value": "community",
        "text": "Community Gathering"
       },
       {
        "value": "citywalking",
        "text": "City Walking / Exercising"
       },
       {
        "value": "sightseeing",
        "text": "Urban Sightseeing"
       }
      ]
     },
     {
      "type": "image",
      "name": "image7-2",
      "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=e05e8a43-1123-494b-826c-36c8cedf368e",
      "imageFit": "cover",
      "imageHeight": "auto",
      "imageWidth": "100%"
     },
     {
      "type": "ranking",
      "name": "functionality",
      "title": "Functionality (function quality, density): Rank the most related activity.",
      "description": "(Drag to rank in descending order of importance of Functionality on activities)",
      "setValueIf": "{functionality} allof ['Item 1']",
      "isRequired": true,
      "choices": [
       {
        "value": "eating",
        "text": "Eating / Drinking"
       },
       {
        "value": "nature",
        "text": "Nature Exploration"
       },
       {
        "value": "community",
        "text": "Community Gathering"
       },
       {
        "value": "citywalking",
        "text": "City Walking / Exercising"
       },
       {
        "value": "sightseeing",
        "text": "Urban Sightseeing"
       }
      ]
     },
     {
      "type": "image",
      "name": "image7-3",
      "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=2cab06c1-e900-470c-8524-b1893eaaf84e",
      "imageFit": "cover",
      "imageHeight": "auto",
      "imageWidth": "100%"
     },
     {
      "type": "ranking",
      "name": "accessibility",
      "title": "Accessibility (distance, public traffic service): Rank the most related activity.",
      "description": "(Drag to rank in descending order of importance of Accessibility on activities)",
      "setValueIf": "{accessibility} allof ['Item 1']",
      "isRequired": true,
      "choices": [
       {
        "value": "eating",
        "text": "Eating / Drinking"
       },
       {
        "value": "nature",
        "text": "Nature Exploration"
       },
       {
        "value": "community",
        "text": "Community Gathering"
       },
       {
        "value": "citywalking",
        "text": "City Walking / Exercising"
       },
       {
        "value": "sightseeing",
        "text": "Urban Sightseeing"
       }
      ]
     },
     {
      "type": "image",
      "name": "image7-4",
      "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=f0aed8a5-47c6-47f5-9029-ced409b186b7",
      "imageFit": "cover",
      "imageHeight": "auto",
      "imageWidth": "100%"
     },
     {
      "type": "ranking",
      "name": "contact_density",
      "title": "Contact Density (vibrant / peaceful): Rank the most related activity",
      "description": "(Drag to rank in descending order of importance of Contact Density on activities)",
      "setValueIf": "{contact_density} allof ['Item 1']",
      "isRequired": true,
      "choices": [
       {
        "value": "eating",
        "text": "Eating / Drinking"
       },
       {
        "value": "nature",
        "text": "Nature Exploration"
       },
       {
        "value": "community",
        "text": "Community Gathering"
       },
       {
        "value": "citywalking",
        "text": "City Walking / Exercising"
       },
       {
        "value": "sightseeing",
        "text": "Urban Sightseeing"
       }
      ]
     }
    ],
    "title": "Part 7: Social Activity Preference for Spatial Feature",
    "description": "For following questions, please rank the following five social activities in descending order of importance of spatial features on acitivities, when specific spatial feature is considered."
   },
   {
    "name": "page8",
    "elements": [
     {
      "type": "text",
      "name": "email",
      "title": "Please fill in your email address.",
      "isRequired": true
     },
     {
      "type": "text",
      "name": "nus_id",
      "title": "Please fill in your NUS ID (starting with 'E').",
      "isRequired": true
     }
    ],
    "title": "Part 8: Information Collection",
    "description": "Please fill in your email address and NUS ID (stating with 'E') for receiving the compensation. "
   }
  ],
  "showQuestionNumbers": "off",
  "showProgressBar": "aboveheader",
  "progressBarType": "questions",
  "autoGrowComment": true,
  "showPreviewBeforeComplete": "showAllQuestions"
 }

export default function App() {

  const model = new Model(surveyJson);
  model.applyTheme(themeJson)

  async function saveSurveyResult(data) {
    // Create a new SurveyResult entry using DataStore.
    await DataStore.save(
      new SurveyResult(data) 
    );
    console.log("Survey result saved:", data);
  }

  model.onComplete.add((survey, options) => {
    const data = {};

    // List of image selection question names
    const imageQuestionNames = [
      'comfort_1', 
      'comfort_2', 
      'comfort_3', 
      'comfort_4',
      'comfort_5',
      'comfort_6',
      'thermal_comfort_1',
      'thermal_comfort_2',
      'thermal_comfort_3',
      'thermal_comfort_4',
      'thermal_comfort_5',
      'thermal_comfort_6',
      'temperature',
      'sun_intensity',
      'heat_sources',
      'humidity',
      'wind_velocity',
      'traffic_flow',
      'greenery',
      'shading_area',
      'construction_material',
      'imageability',
      'enclosure',
      'human_scale',
      'transparency',
      'complexity',
      'safe',
      'lively',
      'beautiful',
      'wealthy',
      'boring',
      'depressing'
      // Add more names as necessary
    ];

    // Iterate through image selection questions
    imageQuestionNames.forEach(questionName => {
      const selectedValue = survey.data[questionName];
      if (selectedValue) {
        // Use the imageChoicesMap to get the unselected image.
        const allImages = imageChoicesMap[questionName] || [];
        const unselectedImages = allImages
          .filter(choice => choice.value !== selectedValue)
          .map(choice => choice.value);

        // Combine selected image name with unselected ones
        data[questionName] = selectedValue + ',' + unselectedImages.join(',');
      } else {
        // Handle cases where no image is selected
        data[questionName] = "None";
      }
    });

    // Assuming you also have specific names for ranking questions
    const rankingQuestionNames = [
      'eating_drinking',
      'nature_exploration',
      'community_gathering',
      'citywalking',
      'urban_sightseeing',
      'streetscape_perception',
      'functionality',
      'accessibility',
      'contact_density',
      'email',
      'nus_id'
      // Add more names as necessary
    ];

    // Directly store ranking question responses
    rankingQuestionNames.forEach(questionName => {
      data[questionName] = survey.data[questionName] || "None";
    });

    saveSurveyResult(data); 
  });
  
  return <Survey model={model} />;
}
