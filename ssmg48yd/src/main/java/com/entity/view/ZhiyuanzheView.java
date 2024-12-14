package com.entity.view;

import com.entity.ZhiyuanzheEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 志愿者
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2022-04-26 22:00:28
 */
@TableName("zhiyuanzhe")
public class ZhiyuanzheView  extends ZhiyuanzheEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public ZhiyuanzheView(){
	}
 
 	public ZhiyuanzheView(ZhiyuanzheEntity zhiyuanzheEntity){
 	try {
			BeanUtils.copyProperties(this, zhiyuanzheEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}