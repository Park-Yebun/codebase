## 1. HTTP METHOD
### **안전성**
#### HTTP 메서드가 상태를 바꾸지 않는 경우(= 응답 코드가 항상 같을 경우)
### **멱등성**
#### 동일한 요청을 한 번 보낼 때와 여러 번 보낼때의 서버상의 리소스가 변화가 없을때

#### **예시**
- PUT, DELETE  

PUT 과 DELETE 는 모두 한 번 요청을 보낼 때와 여러 번 요청을 보냈을 경우 상태의 변화가 있으므로 안전하지 않다. (status code 200 -> 404)

그럼에도 서버 상의 데이터는 변화가 없으므로 멱등성을 가진다.

- GET


GET은 안전한 메서드이기 때문에 멱등성을 가진다.(안전함 ⊂ 멱등성)

- POST


한 번 요청을 보낼 때와 여러 번 요청을 보낼 시에 데이터가 계속해서 갱신되므로 안전성과 멱등성을 가지지 않는다.


### **캐시성** 
응답 결과 리소스를 캐싱해서 효율적으로 사용할 수 있는 경우(= Cacheable)
|  | 캐시 가능 |
|---|:---:|
| GET | O |
| POST | O (구현x)|
| PUT | X |
| PATCH | O (구현x) |
| DELETE | X |
=> 실제로는 GET이나 HEAD 정도만 캐시성을 가짐 (호출로 인해 데이터가 변경되는 메소드의 경우 캐시 데이터 불일치 문제가 발생하기 때문)

## 2. HTTP Status Code : 요청에 대한 상태 표시
1. 정보를 제공하는 응답 (1xx)

요청을 받았으며, 프로세스가 계속 진행합니다.

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;100 Continue : 임시적 응답으로, 지금까지의 요청의 상태가 괜찮으며 계속해서 요청을 하거나 완료한 경우를 알려줌

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;101 Switching Protocol : 클라이언트가 보낸 Upgrade 요청 헤더에 대한 알림 응답 (프로토콜이 변경될 예정)

2. 성공적인 응답 (2xx)

요청을 성공적으로 받았으며 인식했고 수용합니다.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;200 OK : 요청이 성공적으로 완료됨.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;201 Created : 일반적으로 POST 또는 PUT 요청 이후에 요청이 완료된 후 새로운 리소스가 생성되었음을 알림

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;202 Accepted : 요청이 완료되었으나 요청에 대해 처리중이거나 처리 시작되지 않아 아직 응답할 수 없음

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;204 No Content : 요청이 성공적으로 처리됐으나 클라이언트는 응답에서 어떠한 데이터를 받지 않음

3. 리다이렉트 (3xx)

요청 완료를 위해 추가 작업 조치가 필요합니다.

4. 클라이언트 에러 (4xx)

요청의 문법이 잘못되었거나 요청을 처리할 수 없습니다.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;400 Bad Request : 클라이언트의 잘못된 문법

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;401 Unauthorized : 요청한 응답을 받기 위해 클라이언트에서 스스로를 인증해야함

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;403 Forbidden : 클라이언트에서 콘텐츠에 접근할 권리를 가지고 있지 않음(401과 다른점은 서버가 클라이언트가 누군지 알고있음)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;404 Not Found : 요청받은 리소스를 찾을 수 없음(URL 에러)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;405 Method Not Allowed : 요청한 메서드를 사용할 수 없음

5. 서버 에러 (5xx)

서버가 명백히 유효한 요청에 대해 충족을 실패했습니다.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;500 Internet Server Error : 서버에서 문제가 발생했고 구체적인 내용을 표시할 수 없음

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;502 Bad Gateway : 게이트웨이, 즉 서로 다른 프로토콜을 연결하는 장치에서 생긴 문제로 통신이 제대로 이루어지지 않음, 서버의 연결이 끊긴 경우 등