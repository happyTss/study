## 容器基本操作

```shell
1 查看docker信息 sudo docker info
2 运行容器 sudo docker run -i -t ubuntu /bin/bash
3 在容器中可以安装软件和我们外面的linux机器一样,只是不一样的ubuntu和centos命令不一样
4 列出容器 sudo docker ps -a (-a 包括没有运行的)
5 启动容器的时候可以给容器命名 sudo docker run --name firstContainername -i -t ubuntu /bin/bash
6 停止容器 sudo docker stop firstContainername (restart)
7 附着进入容器 sudo docker attach firstContainername
8 后台运行容器 sudo docker run -d -i -t ubuntu /bin/bash
9 获取容器日志 sudo docker logs firstContainername
10 持续跟踪容器日志 sudo docker logs -f firstContainername
11 持续跟踪容器日志,并打印时间 sudo docker logs -ft firstContainername
12 可以将日志重定向到宿主机,也有一些日期驱动 sudo docker run --logs-driver="syslog" --name firstContainername -d 使用syslog的日志驱动,关于日志驱动百度
13 查看容器内的进程 sudo docker to firstContainername
14 统计容器的内存,网络,cpu,io等的指标 sudo docker stats firstContainername
15 在后台运行的容器内执行命令 sudo docker exec -d firstContainername touch /etc/new_config_file
16 进入容器 sudo docker exec -it firstContainername /bin/bash
17 停止容易 sudo docker stop firstContainername
18 自动重启 sudo docker run --restart=always --name firstContainername -d ubuntu /bin/sh
--restart=always 无论什么情况停止都会重启,还可以加参数 --restart=on-failure:5 退出代码为非0时重启5次
19 获取容器信息 sudo docker inspect firstContainername
20 删除容器 sudo docker rm firstContainername
21 删除所有容器 sudo docker rm `sudo docker ps -a -q` -a返回所有容器 -q只返回容器的id
```

## 镜像

```shell
1 列出所有镜像 sudo docker images
2 拉取镜像 sudo docker pull ubuntu 可以指定版本号,不指定为默认最新的镜像
3 查找镜像 sudo docker search ubuntu
4 注册docker账号后就可以使用 docker login命令进行登录
5 可以拉取一个centos镜像 sudo docker pull centos 然后运行 sudo docker run -it --name centosContener centos /bin/bash 进入容器安装vim yum -y install vim 退出容器 exit 提交容器 sudo docker commit -m"信息" -a "作者" centosContener 镜像用户名/仓库名:标签
6 查看镜像的信息 sudo docker inspect 镜像用户名/仓库名:标签
7 Dockerfile
FROM centos
RUN yum -y install nginx
EXPOSE 80
sudo docker build -t="镜像用户名/仓库名:标签"
8 构建镜像时禁用缓存 sudo docker build --no-cache -t="镜像用户名/仓库名:标签"
9 查看docker镜像的构建历史 sudo docker history centos 实例 sudo docker history zhaoqinrong/centos:test
10 查看容器端口的映射情况 sudo docker port centosContener 80 会返回映射到宿主机上的端口
11 端口绑定 sudo docker run --name firstContainername -p 80 -d zhaoqinrong/centos
sudo docker run --name firstContainername -p 8080:80 -d zhaoqinrong/centos
sudo docker run --name firstContainername -p 127.0.0.1:8080:80 -d zhaoqinrong/centos
sudo docker run --name firstContainername -p 映射ip:映射到宿主机的端口:容器端口 -d zhaoqinrong/centos
sudo docker run --name firstContainername -p -d zhaoqinrong/centos 将构建镜像中的dockerfile文件中的EXPOSE的所有端口公开,并随机绑定到宿主机的端口上
12 Dockerfile 中的CMD命令,RUN命令是在构建中,docker容器未启动时作用,而CMD是在启动后执行的命令
CMD["/bin/bash","-l"]
```

