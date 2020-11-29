# RDBMS NOSQL 차이



#### 데이터 베이스(Data Base)

- 데이터베이스(Data Base)란 여러 사람들이 공유하고 사용할 목적으로 통합 관리되는 데이터들의 모임
- 데이터베이스 관리시스템(DBMS,DataBaseManagementSystem)이란 다수의 사용자들이 데이터베이스 내의 데이터를 접근할 수 있도록 해주는 소프트웨어들을 의미함
- 데이터 베이스는 크게 두 가지로 관계형(RDBMS) 비관계형(NoSQL)로 나뉨.



#### RDBMS 

- SQL(Structured Query Language)은 데이터베이스에서 사용하는 쿼리 언어로 SQL을 사용하여 RDBMS에서 데이터를 검색, 저장, 수정, 삭제 등이 가능함.
- RDB(Relational Database)란 관계형 데이터 모델에 기초를 둔 데이터 베이스로 관계형 데이터 모델이란 데이터를 구성하는데 필요한 방법 중 하나로 모든 데이터를 2차원 테이블 형태로 표현해줌.
- RDBMS(Relational Database Management System)란 관계형 데이터베이스를 생성하고 수정, 삭제 관리할 수 있는 소프트웨어라고 정의할 수 있음.

##### 특징

- Data를 coulmn과 row 형태로 저장함
- 데이터의 분류, 정렬, 탐색 속도가 비교적 빠름.
- SQL이라는 정교한 검색 query를 통해 데이터를 다룸
- Transaction(작업의 완전성을 보장)
- 반드시 Schema 규격에 맞춰야 함.(유연한 데이터 저장 X)
- 부하의 분산이 어려움.
- MySQL, SQLite 등이 있음.



#### NoSQL

- NoSQL은 관계형 데이터베이스와 반대되는 방식을 사용하여 데이터간의 관계를 정의하지 않음.
- RDBMS 에서는 스키마에 맞추어 데이터를 관리하여야 하지만 NoSQL은 스키마가 없어 좀 더 자유롭게 데이터를 관리할 수 있음.
- NoSQL에서 테이블과 같은 개념으로 컬렉션이라는 형태로 데이터를 관리함.

 ##### 특징

- 데이터간의 관계를 정의하지 않음.
- RDBMS의 복잡도와 용량 한계를 극복하기 위한 목적으로 등장한 만큼 RDBMS에 비해 훨씬 더 대용량의 데이터를 저장할 수 있음.
- 분산형 구조: 데이터를 여러 대의 서버에 분산해 저장
- 고정되지 않은 Table Schema
- Key에 대한 PUT/GET만 지원함.
- Schema가 없기 때문에  Data에 대한 규격화된 결과 값을 얻기 힘듦.
- MongoDB, Cassand, Redis 등 있음.